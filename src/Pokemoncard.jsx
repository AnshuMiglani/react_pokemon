import React from "react";
import "./App.css";

const Pokemoncard=(props)=>{
    // console.log(props.details);
    return(<div className="pokecard">
    <div className="imgwala">
        <img src={props.details.sprites.other.dream_world.front_default} alt={props.name}/>
    </div>
    <p>{(props.details.name)[0].toUpperCase()+(props.details.name).slice(1)}</p>
    <div className="abilites">
        {props.details.types.map((ask)=>{
            return <p>{(ask.type.name)}</p>;
        })}
    </div>
    <div className="maindivtag">
       <div className="specs1">
        <div  className="insidediv"><span className="heading">Height:</span>
        <span  className="values">{props.details.height}</span></div>
        <div className="insidediv1"><span className="heading1">Experience:</span><span className="values1">{props.details.base_experience}</span></div>
      </div>
      <div className="specs2">
      <div  className="insidediv"><span className="heading">Weight:</span>
      <span  className="values">{props.details.weight}</span></div>
        <div className="insidediv1"><span className="heading1">Attack:</span><span className="values1">{props.details.stats[1].base_stat}</span></div> 
      </div>
      <div className="specs3">
      <div className="insidediv"><span className="heading">Speed:</span>
      <span  className="values">{props.details.stats[5].base_stat}</span></div>
      <div className="insidediv1"><span className="heading1">Abilites:</span><span className="values1">{props.details.abilities[0].ability.name}</span></div>
      </div>
    </div>
    </div>);
};
export default Pokemoncard;