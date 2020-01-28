import React from 'react';
import './../../css/Grid.css';

const GridTile = (props) => {

    const handleClueClick = (e) => {
        e.preventDefault();
        props.setShowClueCard(true);
        props.hideAndShowTile(props.recordClue.id, props.recordClue);
    }

  return (
         <div onClick={handleClueClick} className={(props.disabled || !props.value ? "GridTile-hide" : "Grid-tile")}>
                {props.disabled || !props.value ? 'X' : '$' + props.value}
        </div>
    );
}

  export default GridTile;