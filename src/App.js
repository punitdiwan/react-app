import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    input :'',
    reversed:'',
    data:''
  }

  changeHandler = (e) => {
    const inputTxt = e.target.value;
    this.setState({input: inputTxt, data: inputTxt});
  }

  clickHandler = (e)=>{
    const txt = this.state.input;
    let array = txt.split('').reverse();
    let reversedString =  array.join('');
    this.setState({data: reversedString, input:''});
    
  }

 render(){
  return (
    <div className="App">
      <header className="App-header">
       <label>Text: {this.state.data}</label>
       <input type="text"
       value={this.state.input}
       placeholder="Enter Text"
       onChange={this.changeHandler}
       />
       <button type="button" value="reverse"
       onClick={this.clickHandler} >Reverse</button>
      </header>
    </div>
  );
 }
}

export default App;
