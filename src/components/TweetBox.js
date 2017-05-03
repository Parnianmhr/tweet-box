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

  overFlowAlert() {
    if (this.remainingCharacters() < 0) {
      var beforeOverflowText = this.state.text.substring(140 - 10, 140);
      var overflowText = this.state.text.substring(140);

      return(
        <div className="alert alert-warning">
          <strong>Oops! Too long:</strong>
          ... { beforeOverflowText }
          <strong className="bg-danger">{ overflowText }</strong>
        </div>
      )
    } else {
      return ""
    }
  }

  render() {
    return(
      <div className="well clearfix">
      { this.overFlowAlert() }
        <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
        <br/>
        <span>{this.remainingCharacters()}</span>
        <button className="btn btn-primary pull-right" disabled={this.remainingCharacters() === 140} >Tweet</button>
        <button className="btn btn-default pull-left" onClick={this.togglePhoto.bind(this)}> { this.state.photoAdded ? "✓ Photo Added" : "Add Photo" } </button>
      </div>
    )
  }
}

export default TweetBox;
