import React from 'react';
import Logo from './Logo';
import Title from './Title';
import Counter from './Counter'
import LinkTitle from './LinkTitle';
import './App.css';

class  App extends React.Component {

  render(){
    let user = {firstName:'John', surName:'Doe'};
    return (
      <div className="App">
        <header className="App-header">
            <Logo/>          
          <Title msg="This is my React Props"/>
          <Counter startAt={5}/>
          <LinkTitle msg={user}/>
          
        </header>
      </div>
    );
  }

}

export default App;
