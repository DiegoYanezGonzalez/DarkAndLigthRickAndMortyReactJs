import React, { useState, useEffect, useReducer } from 'react'

const initialState={
    favorites:[]
}

const favoritesReducer =(state,action ) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites, action.payLoad]
            };
            default:
                return state;  
    }
}

const Characters = () => {

    const[favorites,dispatch] = useReducer(favoritesReducer,initialState);
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        const results = data.results;
        setCharacters(results);
        console.log('results ->', results);
    }

    useEffect(() => {
        getCharacters();
    }, [])

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload:favorite})
    }

    return (
        <div className="">   
            <div className="Characters">
                {
                    characters.map( (character) => (
                        <div className="Character" key={character.name}>
                            <h2>{ character.name}</h2>
                            <figure>
                                <img src={character.image} alt={character.species} />
                                <figcaption>
                                    <p><b>Gender: </b> {character.gender}</p>
                                    <p><b>Origin: </b> {character.origin.name}</p>
                                    <p><b>Location: </b> {character.location.name}</p>
                                    <p><b>Specie: </b> {character.species}</p>
                                    <p><b>Status: </b> {character.status}</p>
                                    
                                </figcaption>
                                <button type="button" onClick={() =>handleClick (character)} > 
                                    Agregar a favoritos</button>
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Characters;
