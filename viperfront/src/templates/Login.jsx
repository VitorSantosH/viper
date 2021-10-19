import React, { useState } from "react";
import api from '../services/api'
import { Link } from "react-router-dom"



export default props => {





    const [emailValue, setEmailValue] = useState('')
    const [senhaValue, setSenhaValue] = useState('')

    function enviar(e) {
        api.post(`/user/login`, {

            email: emailValue,
            senha: senhaValue

        }).then((res) => {

            // verifica se contem algum erro ao criar user
            if (res.data.erro) {
                let erros = res.data.erro.map((erro) => {
                    return erro.texto + '\n'
                })

                alert(erros)
            }

            if (res.data.payload && res.data.token) {
                localStorage.setItem('payload', JSON.stringify(res.data.payload))
                localStorage.setItem('token', JSON.stringify(res.data.token))
            }

            window.location.href = api.baseURL




        }).catch((err) => {
            console.log(err)
        })
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <h4>Login:</h4>

                <div className="form-control">
                    <div className="card-body">
                        <form onSubmit={e => enviar(e)}>

                            <label htmlFor="email">Email: </label>
                            <input
                                type='text'
                                name="email"
                                id="email"
                                className="form-control"
                                value={emailValue}
                                onChange={e => setEmailValue(e.target.value)}
                            />

                            <label htmlFor="senha" >Senha: </label>
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                className="form-control"
                                value={senhaValue}
                                onChange={e => {
                                    setSenhaValue(e.target.value)
                                }}
                            />

                            <button type='submit' className="btn btn-success mt-4" type="submit">Entrar</button>

                        </form>
                    </div>
                    <Link to="/cadastro">
                        <button className='btn form-control' >Já possuo uma conta</button>
                    </Link>

                </div>
            </div>


        </div>
    )




}