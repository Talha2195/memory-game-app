import React, { useState, useEffect } from "react";
import { fetchPokemon } from "./fetchPokes";
import { fetchPokemonImages } from "./fetchPokeImg";
import { shuffleObject } from "./shuffle";

function MemoryGames() {
    const [imageLinks, setImageLinks] = useState(null)

    useEffect(() => {
        const fetchDataAndSetState = async () => {

            try {
                const result = await fetchPokemonImages()
                const shuffledImages = shuffleObject(result)
                setImageLinks(shuffledImages)
                console.log(imageLinks)
            } catch (error) {

            }
        }
        fetchDataAndSetState()
    }, [])

    useEffect(() => {

    })

    return (
        <div id='mainDiv'>
            <div id='headingDiv'>
                <h1>Memory Game</h1>
                <h2>Best Score:</h2>
                <h3>Current Score:</h3>
            </div>
            <div id='gameSquareDiv'>
                <div id='firstHalf'>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                </div>
                <div id='secondHalf'>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                    <div className="squares">
                        <img className = 'pokImg' src= ""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemoryGames;