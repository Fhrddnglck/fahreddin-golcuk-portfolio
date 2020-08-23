import React from 'react';
import './App.css';
import { Header,Resume,Navbar,Projects,Experiences } from '../index'

const App = () => {
  return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Resume/>
        <Projects/>
        <Experiences/>
      </div>
  );
}

export default App;
