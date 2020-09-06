import React, {useState} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {store} from '../../Stores/index'
import { Header,Resume,Navbar,Projects,Experiences, TopNav,MenuLast } from '../index'

const App = () => {

  return (
      <Provider store={store}>
          <div className="App">
              <MenuLast/>
              <TopNav/>
              <Header/>
              <Resume/>
              <Projects/>
              <Experiences/>
          </div>
      </Provider>
  );
}

export default App;
