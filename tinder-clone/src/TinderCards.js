import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400'
        },
        {
            name: "Jeff Bezos",
            url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
        },
        {
            name: "Mark Zuckerberg",
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }
    ]);

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