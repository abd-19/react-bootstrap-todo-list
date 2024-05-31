import './App.css';
import React from 'react';
import Navbar from './navbar';
import Todo from './todo';
import Footer from './footer';
function App() {

  const handleClick = (e) =>{
    if(e.type === 'click'){
      console.log('Button clicked');
    }else if(e.type === 'MouseOut'){
      console.log('Mouse Over');
  }
}

  return (
    <>
    <Navbar/>
    <Todo />
    <Footer/>
    </>
  );
}

export default App;
