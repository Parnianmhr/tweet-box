import React, { PureComponent } from 'react'

class TweetBox extends PureComponent {

  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }


  render() {
    return(
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
        <br/>
        <span>{140 - this.state.text.length}</span>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
      </div>
    )
  }
}

export default TweetBox;
