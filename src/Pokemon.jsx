import React,{useEffect, useState} from "react";
import "./App.css";
import Pokemoncard from "./Pokemoncard";

const Pokemon=()=>{
  const [pokemon,setpokemon]= useState([]);
  const [search,setsearch]=useState("");

    const API= "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchingdata=async()=>{
        try{
            const data= await fetch(API);
            const finaldata= await data.json();
            const fetcheddata= finaldata.results.map(async(datare)=>{
                const urldata= await fetch(datare.url);
                // console.log(datare.name);
                const finalurldata= await urldata.json();

                return finalurldata;
            });
            const detailrespone= await Promise.all(fetcheddata);
            setpokemon(detailrespone);         
        }
        catch(e){
            console.log(e);
        }
    
    };
    useEffect(()=>{
        fetchingdata();
      });

    const searchdata= pokemon.filter((curpokemon)=>curpokemon.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <React.Fragment>
          <header>
            <h1>Let's Catch Pokémon</h1>
          </header>
          <div className='inputfield'>
            <input type='text' placeholder='Search Pokemon' value={search} onChange={(e)=>{setsearch(e.target.value);}}/>
          </div>
          <div>
          <ul>
            {searchdata.map(function(curpokemon){
              return(<Pokemoncard key={curpokemon.id} details={curpokemon}/>);
            })}
          </ul>
          </div>
        </React.Fragment>
      );
};


export default Pokemon;