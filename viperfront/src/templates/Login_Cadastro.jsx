import React, { useEffect, useState } from "react";
//import api from "../services/api";
//import config from '../config/auth'
import Login from "./Login";
import Cadastro from "./Cadastro";



export default props => {


    const [cadastroOuLogin, setCadastroOuLogin] = useState(false)

    // variaveis cadastro



   



    

    function UserMenu() {
        if (cadastroOuLogin == false) {
            return (
                <div>
                    <button className='btn form-control' onClick={e => {
                        setCadastroOuLogin(e.target.value)
                    }} value={'cadastro'}>Cadastrar</button>

                    <button className='btn form-control' onClick={e => {
                        setCadastroOuLogin(e.target.value)
                    }} value={'login'}>Fazer Login</button>
                </div>
            )
        } else if (cadastroOuLogin == 'login') {
            return <Login  setCadastroOuLogin  />
        } else {
            return <Cadastro setCadastroOuLogin />
        }
    }

    return (

        <div>
            <UserMenu />
        </div>
    )

}