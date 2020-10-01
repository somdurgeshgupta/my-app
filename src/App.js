import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/message'
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Message />
     <Greet name="bruce" heroName="batman">
       <p>this is a children props</p>
       <h1><p>my this is a rule</p><b>this it </b></h1>
       </Greet> */}
     <Greet name="cool" heroName="i am cool">
       <p>som this is amazing</p>
       </Greet>
     {/* <Welcome name="bruce" heroName="batman">
       <button>Action</button>
       </Welcome>
     <Hello /> */}
    </div>
  );
}

export default App;
