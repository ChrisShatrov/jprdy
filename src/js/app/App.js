import React from 'react';
import logo from './../../img/mainLogo.png';
import '../../css/App.css';
import Grid from './../grid/Grid';
import Loading from './../loading/Loading';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      gameLoading: false,
      categories: [],
      clues: []
    };
    this.startTheGame = this.startTheGame.bind(this);
    this.endTheGame = this.endTheGame.bind(this);
  }

  startTheGame() {
    this.setState(prevState => ({
      gameLoading: !prevState.gameLoading
    }));

    for(var i=25; i<39; i+=3) {
      // Fetching category data from the jservice api provided (limiting it to 5. 1 is going to default to the required science category)
      // ALMOST FORGOT THE REQUIRED SCIENCE CATEGORY WHICH IS ID 25
      fetch("http://www.jservice.io/api/category?id=" + i)
      .then(res => res.json())
      .then(
        (result) => {
          var thisData = result;
          if (thisData.clues_count > 5 && thisData.clues_count < 100) {
            thisData.clues = thisData.clues.slice(0, 4);
          }
          else {
            thisData.clues = thisData.clues.slice(0, 4);
          }
          for(var i =0; i<thisData.clues.length; i++) {

            if(!thisData.clues[i].value) {
              thisData.clues.slice(i, 1);
            }
          }

          var categories = this.state.categories;
          categories.push(thisData);
          this.setState({
            gameLoading: false,
            gameStarted: true,
            categories:  categories
          });
        },
        (error) => {
          this.setState({
            gameStarted: false,
            gameLoading: false,
            error
          });
          // TODO: Make error handling prettier
          alert('Oops. Something went wrong. ' + error);
        }
      )
    }

  }

  endTheGame() {
    this.setState(prevState => ({
      gameStarted: !prevState.gameStarted,
      categories: []
    }));
  }

  render() {
    return (
      <div className="App">

        {/* INITIAL MENU CONTENT */}

        {!this.state.gameLoading && !this.state.gameStarted && <div className={this.gameStarted ? "App-hide" : "App-menu-body"}>
            <div className="App-game-title">Chris Shatrov's</div>
            <img src={logo} className="App-logo" alt="logo" />
            <button className="App-play-button" onClick={this.startTheGame}>PLAY!</button>
        </div>}

        {/* MOCKED LOADING CONTENT */}
        {this.state.gameLoading && <Loading />}


         {/* GRID CONTENT */}
         {!this.state.gameLoading && this.state.gameStarted && <Grid categories={this.state.categories} endThisGame={this.endTheGame}/>}
      </div>
    );
  }
}

export default App;
