import React from "react"
import Header from "./templates/Header";
import { HashRouter } from 'react-router-dom'
import Routes from '../src/services/Routes'
import './font-awesome/css/font-awesome.css'




function App() {

  return (
    <HashRouter>
     
      <Header />

      <Routes/>
     

    </HashRouter>

  )
}

export default App;

