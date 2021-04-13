import './App.css';
import React from 'react';

let userName = prompt("Как тебя зовут?")
let userSurname = prompt("Какая у тебя фамилия?")

class MyComponent extends React.Component {
  render() {
    let {name, surname} = this.props;
    console.log(name);
    return(
      <h1>Привет!, {name} {surname}</h1>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <MyComponent name={userName} surname={userSurname}></MyComponent>
      </header>
    </div>
    )
  }
}

export default App;
