import React, { Component } from 'react';
import logo from './logo.svg';
import WordContainer from './components/WordContainer'
import './App.css';

class App extends Component {

  state = {word: "",
  scrambledWords: []
  }

  getWord = (e) => {
    const newWord =  e.target.value
    this.setState({word: newWord}, () => console.log(this.state.word))
  }

  submitWord = () => {
    const input = this.state.word
    fetch('http://localhost:3300/api/v1/words', {
      method: 'POST',
      headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'},
      body: JSON.stringify({
        word: `${input}`,
      })
    }).then(res => res.json()).then(word => {
    fetch('http://localhost:3300/api/v1/words')
    .then(response => response.json())
    .then(data => {
      this.setState({
        scrambledWords: data.data
      })})
    console.log(this.state.scrambledWords)

    })
  }

  componentDidMount() {
    fetch('http://localhost:3300/api/v1/words')
    .then(response => response.json())
    .then(data => {
      this.setState({
        scrambledWords: data.data
      })})
    console.log(this.state.scrambledWords)
  }

  getScrambledWords = () => {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Word Smith</h1>
        </header>
        <div>
          <WordContainer getWord={this.getWord} submitWord={this.submitWord} wordList={this.state.scrambledWords}/>
        </div>
      </div>
    );
  }
}

export default App;
