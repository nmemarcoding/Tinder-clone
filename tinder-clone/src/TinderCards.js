import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name: 'Elon Musck',
            url:"https://image.cnbcfm.com/api/v1/image/105401065-1534435276321elon.jpg?v=1554386709",
        
        },{
            name: 'Jeff Bezos',
            url:"https://thegrio.com/wp-content/uploads/2020/06/Bezos.jpg",


        }
    ]);

    const swiped = (direction,nameToDelete)=>{
        console.log("removing" + "Left the screen!")
        // setLastDrirection(direction)
    }
    const outOfFrame= (name)=>{
        console.log(name + "left the screen!")
    }

  return (
    <div className="TinderCards">
        <div className="tinderCards__cardContainer">
            {people.map(person=>(
                <TinderCard className="swipe"
                    key={person.name}
                    preventSwipe = {["up","down"]}
                    onSwipe={(dir)=> swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage : `url(${person.url})`}}
                    className="card"
                >
                    <h3>{person.name}</h3>    
                </div>
                </TinderCard>
            ))}
        </div>
        

    </div>
  )
}

export default TinderCards