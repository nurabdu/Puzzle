import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    firstArr: [],
    gameIsOver: false,
    score: 0
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentWillMount() {
    let randomMassive = [];
    let firstArr = [];

    while (randomMassive.length !== 8) {
      let random = this.getRandomInt(9);

      if(!randomMassive.includes(random) && random !== 0){
        randomMassive.push(random);
      }
    }

    randomMassive.map(i => {
      firstArr.push(
        {
          number: i,
          empty: false
        }
    )
    })

    firstArr.push({number: null, empty: true});


    this.setState({
      firstArr: firstArr,
    })
  };

  gameOver = () => {
    let { firstArr, gameIsOver } = this.state;
    if(firstArr === firstArr.sort) {
          this.setState({
            gameIsOver: true
          })
        }
   }
  moveObject = (number, index) => {
    let { firstArr, gameIsOver, score } = this.state;
    this.setState({
      score: score+1
    })
    let emptyObj = {
      empty: true,
      number: null,
    }

  
if(gameIsOver === false) {
this.gameOver();
    if(index === 0) {
      if(firstArr[index + 1].empty) {
        firstArr[index + 1] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
      if(firstArr[index + 3].empty) {
        firstArr[index + 3] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
    }
    if(index === 1) {
      if(firstArr[index - 1].empty) {
        firstArr[index - 1] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
      if(firstArr[index + 1].empty) {
        firstArr[index + 1] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
      if(firstArr[index + 3].empty) {
        firstArr[index + 3] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
    }

    if(index === 2) {
      if(firstArr[index - 1].empty) {
        firstArr[index - 1] = firstArr[index];
        firstArr[index] = emptyObj;
    
      }
      if(firstArr[index + 3].empty) {
        firstArr[index + 3] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
    }

    if(index === 3) {
      if(firstArr[index - 3].empty) {
        firstArr[index - 3] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
      if(firstArr[index + 1].empty) {
        firstArr[index + 1] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
      if(firstArr[index + 3].empty) {
        firstArr[index + 3] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
    }

    if(index === 4) {
      if(firstArr[index - 3].empty) {
        firstArr[index - 3] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
      if(firstArr[index - 1].empty) {
        firstArr[index - 1] = firstArr[index];
        firstArr[index] = emptyObj;
     
      }
      if(firstArr[index + 1].empty) {
        firstArr[index + 1] = firstArr[index];
        firstArr[index] = emptyObj;
   
      }
      if(firstArr[index + 3].empty) {
        firstArr[index + 3] = firstArr[index];
        firstArr[index] = emptyObj;
  
      }
    }

    if(index === 5) {
      if(firstArr[index - 3].empty) {
        firstArr[index - 3] = firstArr[index];
        firstArr[index] = emptyObj;
       
      }
      if(firstArr[index - 1].empty) {
        firstArr[index - 1] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
      if(firstArr[index + 3].empty) {
        firstArr[index + 3] = firstArr[index];
        firstArr[index] = emptyObj;
     
      }
    }

    if(index === 6) {
      if(firstArr[index + 1].empty) {
        firstArr[index + 1] = firstArr[index];
        firstArr[index] = emptyObj;
       
      }
      if(firstArr[index - 3].empty) {
        firstArr[index - 3] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
    }

    if(index === 7) {
      if(firstArr[index - 3].empty) {
        firstArr[index - 3] = firstArr[index];
        firstArr[index] = emptyObj;
       
      }
      if(firstArr[index - 1].empty) {
        firstArr[index - 1] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
      if(firstArr[index + 1].empty) {
        firstArr[index + 1] = firstArr[index];
        firstArr[index] = emptyObj;
       
      }
    }
    if(index === 8) {
      if(firstArr[index - 3].empty) {
        firstArr[index - 3] = firstArr[index];
        firstArr[index] = emptyObj;
        
      }
      if(firstArr[index - 1].empty) {
        firstArr[index - 1] = firstArr[index];
        firstArr[index] = emptyObj;
      
      }
    }
  
    this.setState({
      firstArr: firstArr
    })
  }
 
  };

  render() {

    let {
      firstArr,
    } = this.state;

      return(
          <div className='game'>
            <div className="row">
              {firstArr.map((el, i) =>
                (i <= 2 && i >= 0) &&
                <div
                  className="cell"
                  key={i}
                  onClick={
                    () => this.moveObject(el.number, i)
                  }
                >
                  {el.number}
                </div>
                )
              }
            </div>
            <div className="row">
              {firstArr.map((el, i) =>  (i <= 5 && i >= 3) && <div className="cell" onClick={() => this.moveObject(el.number, i)} key={i}>{el.number}</div>)}
              </div>
            <div className="row">
              {firstArr.map((el, i) => (i <= 9 && i >= 6) && <div className="cell" onClick={() => this.moveObject(el.number, i)} key={i}>{el.number}</div>)}
            </div>
                <h1>Score: {this.state.score}</h1>
          </div>
      );
    }
  }