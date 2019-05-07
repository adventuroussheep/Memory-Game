import React from 'react';
import "./tile.css";


function TileCards (props) {
    return (
        <div className="tileWrapper">
        {/* onClick={() => props.wasPressed(props.id)} */}
            <div className="tileDiv clickImage" onClick={() => props.clickedImage(props.id)}>
                <img className={props.class} alt={props.name} src={props.image}/>
            </div>
        </div>
    )
}

export default TileCards;