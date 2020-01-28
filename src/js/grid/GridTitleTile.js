import React from 'react';
import './../../css/Grid.css';

const GridTitleTile = (props) => {

  return (
      <div className="Grid-title-tile">
          {props.data.title}
      </div>
    );
}

  export default GridTitleTile;