import React, {Component} from 'react';

import Comment from 'comment/Comment.js';
import CommentDate from 'commentDate/CommentDate.js';


export default class CommentBox extends Component{
  render(){
    let {data} = this.props;

    let comments = [];
    let lastDate = null;

    data.map((element, index) => {
      if(element.date !== lastDate){
        comments.push(<CommentDate date={element.date}/>);
      }
      
      comments.push(
        <Comment {...element}/>
      );
      
      lastDate = element.date;
    });

    return (
      <div className="ui threaded comments container">
        <div className="ui dividing header">Comments</div> 
        {comments}
      </div>
    );
  }
}