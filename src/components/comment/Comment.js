import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Reply from 'reply/Reply.js';

let propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  time: PropTypes.string,
  content: PropTypes.string,
  subComment: PropTypes.array
};

export default class Comment extends Component{

  constructor(){
    super();
    this.state = { show: false };
    this.replyClick = this.replyClick.bind(this);
  }

  replyClick(){
    let {show} = this.state;
    show = !show;
    this.setState({ show: show });
  }

  render(){

    let {avatar, name, time, content, subComment} = this.props;
    let showReply = null;
    let {show} = this.state;

    let subComments = subComment ? (
      subComment.map((element, index) => {
        return (
          <div className="comments">
            <Comment {...element}/>
          </div>
        );
      }) 
    ) : null;

    if (show) {
      showReply = <Reply/>;
    } else {
      showReply = '';
    }

    return(
      <div className="comment">
        <a className="avatar">
          <img className="profile" src={avatar} alt=""/>
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">{content}</div>
          <div className="actions">
            <a className="reply" onClick={this.replyClick}>Reply</a>
          </div>
          {showReply}
        </div>
        {subComments} 
      </div>
    );
  }
}

Comment.defaultProps = {
  name: 'bob'
};

Comment.propTypes = propTypes;

