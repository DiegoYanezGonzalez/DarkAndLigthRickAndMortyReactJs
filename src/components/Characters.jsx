import React, {useState,useEffect} from 'react';

const Characters = () => {
//constante que desestructura los dos elementos que necesitamos
const [characters,setCharacters] = useState([]);

//le pasaremos dos parametros la funcion anonima donde esta la logica 
//y una variable que escucha si hay un cambio 
// tiene un arreglo vacio de esta forma solo hara render la primera vez
useEffect(() =>{
   fetch('https://rickandmortyapi.com/api/character/')
   .then(response => response.json())
   .then(data => setCharacters(data.results))
}, []);


    return (
        <div className="characters">
          {characters.map(character =>  (
            <h2>
                  {character.name}
            </h2>
            ))}
        </div>
    );
}

export default Characters;
