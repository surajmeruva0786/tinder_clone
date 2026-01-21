import Reac, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: ''
        }, 
        {
            name: "Jeff Bezos",
            url: ''
        }
    ]);
  return (
    <div>
        <h1>TinderCards</h1>
        {people.map((person) => (
            <TinderCard>
                <div className='card'>
                    style={{backgroundImage: `url(${person.url})`}}
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
    </div>
  )
}

export default TinderCards