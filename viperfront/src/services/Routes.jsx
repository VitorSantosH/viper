import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router'
import Conteudo from '../templates/Conteudo.jsx'
import Produto from '../templates/Produto'
import Login from "../templates/Login"
import Cadastro from "../templates/Cadastro"
import Login_Cadastro from "../templates/Login_Cadastro.jsx";


 

export default props => {


   
   
    return (
        <Switch>
            <Route path="/login_cadastro" component={Login_Cadastro}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/login" component={Login}/>
            <Route exact path='/' component={Conteudo} />          
            <Route path='/:id' component={Produto} />          
        </Switch>
    )

}


