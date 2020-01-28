import React, {useState} from 'react';
import './../../css/ClueCard.css';

const ClueCard = (props) => {


    const [showingAnswer, setShowingAnswer] = useState(false);


    function closeModal(answer) {
        props.setShowClueCard(false);
        props.markQuestionAnswered(answer, props.cardData);
    }

    function showAnswer(show) {
        setShowingAnswer(show);
    }

  return (
      <div className="ClueCard">
         <div className="ClueCard-q-body">
            <div className="ClueCard-question">{props.cardData.question}</div>
            { showingAnswer && <div className="ClueCard-answer"><u>Answer:</u><br/> {props.cardData.answer}</div> }
         </div>
         <div className="ClueCard-q-footer">
            { showingAnswer && <button className="ClueCard-correct" onClick={() => { closeModal(true) }}>Correct Answer</button> }
            { showingAnswer && <button className="ClueCard-wrong" onClick={() => { closeModal(false) }}>Wrong Answer</button> }
            { !showingAnswer && <button className="ClueCard-correct" onClick={() => { showAnswer(true) }}>Show Answer</button> }
         </div>
      </div>
    );
}

export default ClueCard;