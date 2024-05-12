import './index.css'

const PlayView = props => {
  const {choiceDetails, onClickChoice} = props
  const {id, imageUrl, testid} = choiceDetails

  const clickedChoice = () => {
    onClickChoice(id, testid)
  }

  return (
    <li className="rpsLi">
      <button
        onClick={clickedChoice}
        data-testid={testid}
        type="button"
        className="rpsBtn"
      >
        <img src={imageUrl} className="rpsImg" alt={id} />
      </button>
    </li>
  )
}
export default PlayView
