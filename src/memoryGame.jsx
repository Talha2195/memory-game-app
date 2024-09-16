import React, {useState, useEffect} from "react";

function MemoryGames() {
    return (
        <div id='mainDiv'>
            <div id='headingDiv'>
                <h1>Memory Game</h1>
                <h2>Best Score:</h2>
                <h3>Current Score:</h3>
            </div>
            <div id='gameSquareDiv'>
                <div id='firstHalf'>
                    <div className="squares">1</div>
                    <div className="squares">2</div>
                    <div className="squares">3</div>
                    <div className="squares">4</div>
                    <div className="squares">5</div>
                    <div className="squares">6</div>
                </div>
                <div id='secondHalf'>
                    <div className="squares">7</div>
                    <div className="squares">8</div>
                    <div className="squares">9</div>
                    <div className="squares">10</div>
                    <div className="squares">11</div>
                    <div className="squares">12</div>
                </div>
            </div>
        </div>
    )
}
 export default MemoryGames