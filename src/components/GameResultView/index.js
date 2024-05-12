import './index.css'

const ResultsView = props => {
  const {
    resultStatus,
    yourChoiceObj,
    onClickPlayAgain,
    opponentChoiceObj,
  } = props
  console.log(resultStatus)

  const clickedPlayAgain = () => {
    onClickPlayAgain()
  }
  return (
    <div className="resultsCont">
      <div className="youOppoCont">
        <div className="youCont">
          <h1 className="youHead">YOU</h1>
          <img
            className="youImg"
            alt="your choice"
            src={yourChoiceObj.imageUrl}
          />
        </div>
        <div className="youCont">
          <h1 className="youHead">OPPONENT</h1>
          <img
            className="youImg"
            alt="opponent choice"
            src={opponentChoiceObj.imageUrl}
          />
        </div>
      </div>
      <div className="playCont">
        <p className="playHead">{resultStatus}</p>
        <button type="button" onClick={clickedPlayAgain} className="playBtn">
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default ResultsView
