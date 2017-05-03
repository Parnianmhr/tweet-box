import React, { PureComponent } from 'react'

class TweetBox extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      text: "",
      photoAdded: false
     }
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded })
  }

  remainingCharacters() {
    if (this.state.photoAdded) {
      return (140 - 23 - this.state.text.length)
    } else {
      return (140 - this.state.text.length)
    }
  }

  render() {
    return(
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
        <br/>
        <span>{this.remainingCharacters()}</span>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0} >Tweet</button>
        <button className="btn btn-default pull-left" onClick={this.togglePhoto.bind(this)}> { this.state.photoAdded ? "✓ Photo Added" : "Add Photo" } </button>
      </div>
    )
  }
}

export default TweetBox;
