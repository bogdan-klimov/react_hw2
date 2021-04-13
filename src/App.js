import './App.css';
import React from 'react';

const element = React.createElement('h2', {name: "Vasya"}, 'Hello, world!');


class StatefulComponent extends React.Component {

  state = {
    value: 0,
    isTrue: true
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   value: 0,
    //   isTrue: true
    // }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleClick(k) {
    this.setState({
      value: this.state.value + k
    })
  }

  handleToggleChange() {
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>Counter value: {this.state.value}</h3>
        <button onClick={() => this.handleClick(1)}>ADD +1</button>
        <button onClick={() => this.handleClick(-1)}>ADD -1</button>

        <p>{this.state.isTrue ? "Your state is true! ) " : "Your state is false ("}</p>
        <button onClick={() => this.handleToggleChange()}>Change toggle state</button>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
        </form>

      </div>
    )
  }
}


class MyComponent extends React.Component {

  render() {

    const {name, surname} = this.props;

    if (name === 'Oleg') {
      return (
        <div>
          <h1>Привет, {name} {surname}!</h1>
          <h1>Рады приветствовать Вас на нашем сайте!</h1>
          {element}
        </div>
        )
    }

    return (
      <div>
        <h1>Привет, незнакомец!</h1>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <MyComponent name="Oleg" surname="Vasilenko"></MyComponent>

        {/* <StatefulComponent />
        <StatefulComponent />
        <StatefulComponent /> */}
        <StatefulComponent />

      </header>
    </div>
    )
  }
}

export default App;
