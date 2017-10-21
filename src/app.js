import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CommentBox from 'commentBox/CommentBox.js';

require('../semantic-ui/dist/semantic.min.css');
require('./common/style/main.css');

let data = [
    {date: 'Today', time: '11:20', name: 'Matthew', content: 'Hello, everybody!', avatar: require('img/matthew.png')},
    {date: 'Today', time: '11:20', name: 'Elyse', content: 'Hello, everybody!', avatar: require('img/elyse.png'),
      subComment: [
        { time: '11:20',name: 'Bob', content: 'Hello, everybody!', avatar: require('img/bob.png')},
        { time: '11:20',name: 'Elyse', content: 'Hello, everybody!', avatar: require('img/elyse.png')},
        { time: '11:20',name: 'Elliot', content: 'Hello, everybody!', avatar: require('img/elliot.jpg')},
        { time: '11:20',name: 'Molly', content: 'Hello, everybody!', avatar: require('img/molly.png')}
      ]
    },
    {date: 'Today', time: '11:20', name: 'Molly', content: 'Hello, everybody!', avatar: require('img/molly.png')},
    {date: 'Today', time: '11:20', name: 'Elliot', content: 'Hello, everybody!', avatar: require('img/elliot.jpg')},
    {date: 'Yesterday', time: '11:20', name: 'Bob', content: 'Hello, everybody!', avatar: require('img/bob.png')},
    {date: 'Yesterday', time: '11:20', name: 'Matthew', content: 'Hello, everybody!', avatar: require('img/matthew.png')},
    {date: '2 days ago', time: '11:20', name: 'Bob', content: 'Hello, everybody!', avatar: require('img/bob.png')},
    {date: '2 days ago', time: '11:20', name: 'Matthew', content: 'Hello, everybody!', avatar: require('img/matthew.png'),
      subComment: [
        {
          time: '11:20',name: 'Bob', content: 'Hello, everybody!', avatar: require('img/bob.png'),
          subComment: [
            {
              time: '11:20',name: 'Bob', content: 'Hello, everybody!', avatar: require('img/bob.png'),
              subComment: [
                  { time: '11:20',name: 'Molly', content: 'Hello, everybody!', avatar: require('img/molly.png')}
              ]
            },
            { time: '11:20',name: 'Elyse', content: 'Hello, everybody!', avatar: require('img/elyse.png')},
            { time: '11:20',name: 'Elliot', content: 'Hello, everybody!', avatar: require('img/elliot.jpg')},
            { time: '11:20',name: 'Molly', content: 'Hello, everybody!', avatar: require('img/molly.png')}
          ]
        }
      ]
    },
    {date: '2 days ago',  time: '11:20', name: 'Matthew', content: 'Hello, everybody!', avatar: require('img/matthew.png')},
    {date: '2 days ago',  time: '11:20', name: 'Molly', content: 'Hello, everybody!', avatar: require('img/molly.png')}
];

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}

