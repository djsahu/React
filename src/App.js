import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		    <h1>Welcome to My-App</h1>
		    <p>This application is nothing</p>
            The sum is : {parseInt(this.props.val1)+parseInt(this.props.val2)}
      </header>
    </div>
  );
}
}

export default App;
