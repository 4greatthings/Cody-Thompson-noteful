import React, { Component } from 'react';
// import logo from './logo.svg';
import MainMain from '..';
import NoteMain from '../dnotes/note';
import FolderMain from '../dfolder/sidebar';
import {Route} from 'react-router-dom'

import './App.css';

class App extends Component () {
  Mounter = () => {
    return <>
      <Sidebar>
        <Route path='/' component={MainSide} />
        <Route path='/dnotes/:note' component={NoteSide} />
        <Route path='/dfolder/:folder' component={FolderSide} />
      </Sidebar>
      <Main>
        <Route path='/' component={MainMain} />
        <Route path='/dnotes/:note' component={NoteMain} />
        <Route path='/dfolder/:folder' component={FolderMain} />
      </Main>
    </>
  }

  render () { 
      return (
        <div className="App">
          <header><h1>Noteful</h1></header>
          <main>
            {this.Mounter}
          </main>
       </div>
      );
    }

}

export default App;
