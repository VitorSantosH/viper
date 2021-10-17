import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router'
import Conteudo from '../templates/Conteudo.jsx'
import Produto from '../templates/Produto'
import Login from "../templates/Login"


 

export default props => {


   
   
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path='/' component={Conteudo} />          
            <Route path='/:id' component={Produto} />          
        </Switch>
    )

}


