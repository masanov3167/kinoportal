import React,{useEffect, useState} from 'react';
import Films from './Pages/Films/Films'

import './assets/main.css'
import Nav from './Components/Nav';
function App() {

  return (
    <div className="App">
     <Nav />
      <Films />

    </div>
  );
}

export default App;
