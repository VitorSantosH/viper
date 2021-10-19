import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router'
import Conteudo from '../templates/Conteudo.jsx'
import Produto from '../templates/Produto'
import Login_Cadastro from "../templates/Login_Cadastro.jsx";


 

export default props => {


   
   
    return (
        <Switch>
            <Route path="/login" component={Login_Cadastro}/>
            <Route exact path='/' component={Conteudo} />          
            <Route path='/:id' component={Produto} />          
        </Switch>
    )

}


