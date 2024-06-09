import {Component} from 'react'
import './index.css'
const playIcon = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const pauseIcon = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
class DigitalTimer extends Component {
  state = {timerInMinutes: 25, seconds: 0, startTime: false}
  decreaseButton = () => {
    this.setState(prevState => ({
      timerInMinutes: prevState.timerInMinutes - 1,
    }))
  }
  increaseButton = () => {
    this.setState(prevState => ({
      timerInMinutes: prevState.timerInMinutes + 1,
    }))
  }
  resetButtonIcon = () => {
    this.setState({
      timerInMinutes: 25,
      seconds: 0,
      startTime: true,
    })
  }

  startAndPauseButton = () => {
    this.setState(prevState => ({
      startTime: !prevState.startTime,
    }))
  }
  render() {
    const {timerInMinutes, startTime, seconds} = this.state
    const stringifiedMinutes =
      timerInMinutes > 9 ? timerInMinutes : `0${timerInMinutes}`
    const stringifiedSecondes = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="big-container">
        <h1 className="main-heading">DIgital Timer</h1>
        <div>
          <div className="digital-timer-logo-container">
            <div className="logo-inner-container">
              <p className="timer-count">
                {stringifiedMinutes}:{stringifiedSecondes}
              </p>
              <p className="timer-status">{startTime ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="buttons-container">
            <div className="start-and-pause-buttons-time-container">
              <button
                className="start-and-pause-button"
                onClick={this.startAndPauseButton}
              >
                <img
                  src={startTime ? playIcon : pauseIcon}
                  className="play-and-pause-icon"
                />
              </button>
              <h1 className="button-status">{startTime ? 'Start' : 'Pause'}</h1>
            </div>
            <div className="start-and-pause-buttons-time-container">
              <button
                className="start-and-pause-button"
                onClick={this.resetButtonIcon}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  className="play-and-pause-icon"
                />
              </button>
              <h1 className="button-status">Reset</h1>
            </div>
          </div>
          <div className="paragraph-and-decrease-increase-buttons-container">
            <p className="paragraph">Set Timer Limit</p>
            <div className="decrease-and-increase-buttons-container">
              <button
                className="minus-icon-button"
                onClick={this.decreaseButton}
              >
                -
              </button>
              <button className="set-timer-limit-button">
                {timerInMinutes}
              </button>
              <button
                className="minus-icon-button"
                onClick={this.increaseButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
