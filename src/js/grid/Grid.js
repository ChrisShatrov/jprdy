import React, { useState, useEffect } from 'react';
import './../../css/Grid.css';
import gridPic from './../../img/grid.jpg';
import GridTile from './GridTile';
import GridTitleTile from './GridTitleTile';
import ClueCard from './../clue/ClueCard';

const Grid = (props) => {

  const [showClueCard, setShowClueCard] = useState();
  const [currentKey, setCurrentKey] = useState({ });
  const [currentCard, setCurrentCard] = useState({ });
  const [balance, setBalance] = useState(0);
  const [categoryData, setCategoryData] = useState(props.categories);

  function markQuestionAnswered(status, item) {
    if(status) {
      setBalance(balance + item.value);
    }
    else {
      setBalance(balance - item.value);
    }
    fadeTheValue();
  }

  function hideAndShowTile(id, clue) {
    // Setting current active id
    setCurrentKey(id);
    // Setting currect active obj just in case
    setCurrentCard(clue);
    // Looking which card we need to hide
    fadeTheValue();
  }

  function fadeTheValue() {
    // Here we are looking through the array to match to see if its the same as the currenly clicked item (id) so we can hide it
    for(var i=0; i<categoryData.length; i++) {
      for(var j=0; j<categoryData[i].clues.length; j++) {
        if(categoryData[i].clues[j].id === currentKey) {
          categoryData[i].clues[j].disabled = true;
        } 
      }
    }
    setCategoryData(categoryData);
  }

  function buildHeader(thisItem) {
      return (<div className="Grid-container"><GridTitleTile key={thisItem.id} data={thisItem} /></div>)
  }

  function buildBody(clues) {
    return clues.map((item) => { 
      return (<div className="Grid-container">
        <GridTile hideAndShowTile = {hideAndShowTile} setShowClueCard = {setShowClueCard} endThisGame={props.endTheGame} recordClue={item} key={item.id} {... item} />
      </div>)})
  }

  function buildTable() {
    return categoryData.map((item) => { 
      return (
        <td>  
          {buildHeader(item)}
          {buildBody(item.clues)}
        </td>
      )})
  }


  return (
      <div className="Grid">
        <img src={gridPic} className="Grid-background" alt="logo" />
        <button className="Grid-end-game-button" onClick={props.endThisGame}>Stop playing</button>
        <button className="Grid-balance-button" disabled>Balance: ${balance}</button>

         <table className="table">
           <tr>
              {buildTable()}
           </tr>
          </table>

        {showClueCard && <ClueCard setShowClueCard={setShowClueCard} key={'card' + currentCard.id} cardData = {currentCard} markQuestionAnswered={markQuestionAnswered}/> }

        })}
      </div>
    );
}

  export default Grid;