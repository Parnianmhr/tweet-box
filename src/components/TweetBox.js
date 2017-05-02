import React, { PureComponent } from 'react'

class TweetBox extends PureComponent {
  render() {
    return(
      <div className="well clearfix">
        <textarea className="form-control"></textarea>
        <br/>
        <button className="btn btn-primary pull-right">Tweet</button>
      </div>
    )
  }
}

export default TweetBox;
