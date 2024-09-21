import React, { useState, useEffect } from "react";
import { fetchPokemonImages } from "./fetchPokeImg"; 
import { shuffleObject } from "./shuffle";

function MemoryGames() {
    const [imageLinks, setImageLinks] = useState([]);
    const [status, setStatus] = useState(false)
    const [counter, setCounter] = useState(0)
    const [selected, setSelected] = useState([])
    const [best, setBest] = useState(0)

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const result = await fetchPokemonImages(); 
                const shuffledImages = shuffleObject(result); 
                console.log(shuffledImages)
                setImageLinks(shuffledImages);
            } catch (error) {
                console.error("Error fetching images:", error); 
            }
        };
        fetchDataAndSetState(); 
    }, [status]); 

    const handleDivClick = (id) => {
        if (!selected.includes(id)) {
            setSelected(prevSelected => [...prevSelected, id]);
            setStatus(prev => !prev);
            setCounter(prevCounter => prevCounter + 1);
            console.log(counter)
            handleMaxCount()
        }

        else{
            setStatus(prev => !prev);
            setSelected([]);
            setCounter(0)
        }
        
        console.log(selected);
    };

   function handleMaxCount () {
    if (best <= counter) {
        setBest(prevCounter => prevCounter + 1) 
    }
    
    else if (best >= 12) {
        setBest(0)
    }
    }

    return (
        <div id='mainDiv'>
            <div id='headingDiv'>
                <h1>Memory Game</h1>
                <h2>Best Score: {best}</h2>
                <h3>Current Score: {counter}</h3>
            </div>
            <div id='gameSquareDiv'>
                <div id='firstHalf'>
                    {imageLinks.slice(0, 6).map((imageLinks) => (
                        <div className="squares" id={imageLinks.id} key={imageLinks.id} onClick={() => handleDivClick(imageLinks.id)}>
                            <img className='pokImg'  id={imageLinks.id} src={imageLinks.url} alt={`Pokemon ${imageLinks.id}`} />
                        </div>
                    ))}
                </div>
                <div id='secondHalf'>
                    {imageLinks.slice(6).map((imageLinks) => (
                        <div className="squares" id={imageLinks.id} key={imageLinks.id} onClick={() => handleDivClick(imageLinks.id)}>
                            <img className='pokImg' src={imageLinks.url} alt={`Pokemon ${imageLinks.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MemoryGames;