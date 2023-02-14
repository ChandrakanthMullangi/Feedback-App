// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  onEmojiButtonClick = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isTrue} = this.state
    return (
      <div className="feedback-container">
        {!isTrue && (
          <div className="feedback-emojis-container">
            <h1 className="feedback-emojis-container-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="feedback-emojis-response-container">
              {emojis.map(eachObj => (
                <li className="emoji" key={eachObj.id}>
                  <button
                    className="emoji-button"
                    type="button"
                    onClick={this.onEmojiButtonClick}
                  >
                    <img
                      src={eachObj.imageUrl}
                      className="emoji-image"
                      alt={eachObj.name}
                    />
                  </button>
                  <p className="emoji-response"> {eachObj.name} </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isTrue && (
          <div className="love-emoji-response-container">
            <img
              src={loveEmojiUrl}
              className="love-emoji-image"
              alt="love emoji"
            />
            <h1 className="love-emoji-heading">Thank You!</h1>
            <p className="love-emoji-response">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
