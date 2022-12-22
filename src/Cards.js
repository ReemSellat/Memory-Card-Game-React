import React, { useEffect } from "react";
import { useState } from "react";
import ShuffleCards from "./Shuffle";
import uniqid from "uniqid";
import Visited from "./Visited";

function Cards() {
  const [cards, setCards] = useState(["Cow", "Duck", "Hen", "Dog", "Sheep", "Crocodile", "Dear", "Goat", "Cat", "Rabbit", "Fish", "Fox"]);
  const map1 = new Map();
  const [last, setLast] = useState('');
  map1.set("Cow", "https://i.pinimg.com/564x/ff/4b/99/ff4b995bdeeb387f30f8f836b0b8cc44.jpg");
  map1.set("Cat", "https://i.pinimg.com/564x/6f/b7/e5/6fb7e5646258de843e79e80b55244832.jpg");
  map1.set("Sheep", "https://i.pinimg.com/564x/4c/83/56/4c8356aec66a37b8e07664a110e8ff4b.jpg");
  map1.set("Duck", "https://i.pinimg.com/564x/71/ce/9f/71ce9f5ccda5832979bd817a83f5ee71.jpg");
  map1.set("Crocodile", "https://i.pinimg.com/564x/a0/61/d7/a061d74ebb868485fa4f9b04f733dcf3.jpg");
  map1.set("Rabbit", "https://i.pinimg.com/564x/bd/0b/cb/bd0bcbd018bcf033a114caaf3b6a0774.jpg");
  map1.set("Hen", "https://i.pinimg.com/564x/a9/12/92/a91292f249d6d842d15bb928179b4ce6.jpg");
  map1.set("Dog", "https://i.pinimg.com/564x/25/64/a6/2564a62b46d5ab00931ad6f56ef86f06.jpg");
  map1.set("Dear", "https://i.pinimg.com/564x/c8/95/bb/c895bb3de028c993069019974e2e6cb1.jpg");
  map1.set("Fish", "https://i.pinimg.com/564x/fb/1a/b2/fb1ab2cb6e1508f42da9d85c64032a1d.jpg");
  map1.set("Fox", "https://i.pinimg.com/564x/15/97/3f/15973f076849b183ca25c3330224c220.jpg");
  map1.set("Goat", "https://i.pinimg.com/564x/11/98/05/119805724b467c796cd1f64fbb08d24f.jpg");

  const clickedCard = (e) => {
    setCards(ShuffleCards(cards.concat()));
    setLast(e.target.parentNode.innerText);
  }
  return (<div>
    <Visited title={last}></Visited>
    <div className="grid-container">

      {cards.map((card) => {
        return <div key={uniqid()} value={card} className="card" ><h3 onClick={clickedCard}>{card}</h3><img onClick={clickedCard} src={map1.get(card)}></img></div>
      })}


    </div>
  </div>
  )
}
export default Cards;