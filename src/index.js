import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import Chat from './Proj/chatting';
// import App from './Chat/App';
//import MyComp from './class1/mycomp';
// import Class8 from "./class8/class8";
// import Router from "./Proj/Router";
import Try from './Proj/try';


ReactDOM.render(<Try />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
