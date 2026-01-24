import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import database from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    const [gone, setGone] = useState(new Set());

    const Card = ({ person, index }) => {
        const [{ x, y, rot }, api] = useSpring(() => ({
            x: 0,
            y: 0,
            rot: 0,
        }));

        const bind = useDrag(({ down, movement: [mx, my], velocity, direction: [xDir] }) => {
            const trigger = velocity > 0.2;
            const dir = xDir < 0 ? -1 : 1;

            if (!down && trigger) {
                setGone((prev) => new Set([...prev, index]));
            }

            api.start({
                x: down ? mx : gone.has(index) ? (200 + window.innerWidth) * dir : 0,
                y: down ? my : 0,
                rot: down ? mx / 100 : 0,
                config: { friction: 50, tension: down ? 800 : 500 },
            });
        });

        return (
            <animated.div
                {...bind()}
                className="card"
                style={{
                    x,
                    y,
                    transform: rot.to((r) => `rotate(${r}deg)`),
                    backgroundImage: `url(${person.url})`,
                    display: gone.has(index) ? 'none' : 'block',
                }}
            >
                <h3>{person.name}</h3>
            </animated.div>
        );
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, "people"), (snapshot) => {
            setPeople(snapshot.docs.map((doc) => doc.data()));
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person, index) => (
                    <Card key={person.name} person={person} index={index} />
                ))}
            </div>
        </div>
    );
}

export default TinderCards;