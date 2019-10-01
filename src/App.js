import React from 'react';
import Home from './pages/Home'
import './App.css';
import Navbar from './component/NavBar'
import About from './pages/About'

import Error from './pages/Error'
import SignIn from './component/SignIn'
import Register from './component/Register'
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Home/>
    
    
      <Navbar/>
      <Switch>
        <Route path="/" exact component= {Home}/>
        <Route path="/about" exact component ={About}/>
        <Route path ="/register" exact component={Register}/>
        <Route path ="/signin" exact component={SignIn}/>
        <Route component ={Error}/>
      </Switch>
    </div>
  )
}

export default App;
