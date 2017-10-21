import React, {Component} from 'react';

export default class Reply extends Component{
  render() {
    return (
      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui primary submit labeled icon button">
          <i className="icon edit"></i> Add Reply
        </div>
      </form>
    );
  }
}