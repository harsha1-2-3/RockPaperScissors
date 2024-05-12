import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoCloseSharp} from 'react-icons/io5'
import {ScoreColor} from './styledComponents'
import PlayView from './components/PlayView'
import GameResultView from './components/GameResultView'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testid: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testid: 'paperButton',
  },
]

const resultStatusConstants = {
  initial: 'INITIAL',
  win: 'YOU WON',
  loose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}
class App extends Component {
  state = {
    showResults: false,
    yourChoiceObj: '',
    opponentChoiceObj: '',
    score: 0,
    resultStatus: resultStatusConstants.initial,
  }

  onClickChoice = (id, testid) => {
    console.log(testid)
    const randomObjNum = Math.ceil(Math.random() * choicesList.length - 1)
    const randomObj = choicesList[randomObjNum]
    const findYourChoiceObj = choicesList.find(each => each.id === id)
    const yourChoiceId = findYourChoiceObj.id
    const opponentChoiceId = randomObj.id
    let resultStatus
    let scoreChange = 0

    switch (yourChoiceId) {
      case 'ROCK':
        switch (opponentChoiceId) {
          case 'ROCK':
            resultStatus = resultStatusConstants.draw
            break
          case 'PAPER':
            resultStatus = resultStatusConstants.loose
            scoreChange = -1
            break
          case 'SCISSORS':
            resultStatus = resultStatusConstants.win
            scoreChange = 1
            break
          default:
            break
        }
        break
      case 'PAPER':
        switch (opponentChoiceId) {
          case 'ROCK':
            resultStatus = resultStatusConstants.win
            scoreChange = 1
            break
          case 'PAPER':
            resultStatus = resultStatusConstants.draw
            break
          case 'SCISSORS':
            resultStatus = resultStatusConstants.loose
            scoreChange = -1
            break
          default:
            break
        }
        break
      case 'SCISSORS':
        switch (opponentChoiceId) {
          case 'ROCK':
            resultStatus = resultStatusConstants.loose
            scoreChange = -1
            break
          case 'PAPER':
            resultStatus = resultStatusConstants.win
            scoreChange = 1
            break
          case 'SCISSORS':
            resultStatus = resultStatusConstants.draw
            break
          default:
            break
        }
        break
      default:
        break
    }

    this.setState(prevState => ({
      resultStatus,
      score: prevState.score + scoreChange,
      showResults: true,
      yourChoiceObj: findYourChoiceObj,
      opponentChoiceObj: randomObj,
    }))

    console.log(yourChoiceId, 'y')
    console.log(opponentChoiceId, 'o')
  }

  onClickPlayAgain = () => {
    this.setState({showResults: false})
  }

  render() {
    const {
      showResults,
      score,
      yourChoiceObj,
      resultStatus,
      opponentChoiceObj,
    } = this.state

    return (
      <div className="bgRps">
        <div className="rpsCont">
          <div className="scoreCardCont">
            <div className="headsCont">
              <h1 className="head">ROCK PAPER SCISSORS</h1>
            </div>
            <div className="scoreCard">
              <p className="scoreHead">Score</p>
              <ScoreColor scoreColorStatus={score <= 0} className="score">
                {score}
              </ScoreColor>
            </div>
          </div>
          {showResults ? (
            <GameResultView
              yourChoiceObj={yourChoiceObj}
              resultStatus={resultStatus}
              onClickPlayAgain={this.onClickPlayAgain}
              opponentChoiceObj={opponentChoiceObj}
            />
          ) : (
            <div className="rpsBtnCont">
              <ul className="rpsUlCont">
                {choicesList.map(eachChoice => (
                  <PlayView
                    key={eachChoice.id}
                    onClickChoice={this.onClickChoice}
                    choiceDetails={eachChoice}
                  />
                ))}
              </ul>
            </div>
          )}
          <div className="rulesBtnCont">
            <Popup
              className="popup-content"
              modal
              trigger={
                <button type="button" className="rulesBtn">
                  RULES
                </button>
              }
            >
              {close => (
                <>
                  <div className="popupCont">
                    <div className="closeBtnCont">
                      <button
                        onClick={() => close()}
                        type="button"
                        className="closeBtn"
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                          alt="cross"
                          className="closeIcon"
                        />
                      </button>
                    </div>
                    <img
                      className="rulesImg"
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}
export default App
