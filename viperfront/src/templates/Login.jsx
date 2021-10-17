import React, { useEffect, useState } from "react";
import api from "../services/api";
import config from '../config/auth'


export default props => {


    const [cadastroOuLogin, setCadastroOuLogin] = useState(false)

    // variaveis cadastro



    function Login() {


        
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

                window.location.href = '/#/'




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
                            <form  onSubmit={e => enviar(e)}>

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
                                    onChange={ e => {
                                        setSenhaValue(e.target.value)
                                    }}
                                />

                                <button type='submit' className="btn btn-success mt-4" type="submit">Entrar</button>

                            </form>
                        </div>
                        <button className='btn form-control' onClick={e => {
                            setCadastroOuLogin(e.target.value)
                        }} value={'cadastro'} >Não possuo uma conta</button>
                    </div>
                </div>


            </div>
        )
    }



    function Cadastro() {

        const [nomeValue, setNameValue] = useState('')
        const [emailValue, setEmailValue] = useState('')
        const [telefoneValue, setTelefoneValue] = useState('')
        const [senhaValue, setSenhaValue] = useState('')

        function enviar(e) {
            api.post(`/user/cadastro`, {
                name: nomeValue,
                email: emailValue,
                senha: senhaValue,
                tel: telefoneValue
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

                window.location.href = '/#/'




            }).catch((err) => {
                console.log(err)
            })
            e.preventDefault();
        }

        return (
            <div>

                <div>
                    <h4>Cadastrar</h4>

                    <div className="form-control">
                        <div className="card-body">
                            <form onSubmit={e => enviar(e)} >

                                <label htmlFor="name" >Nome: </label>
                                <input
                                    type="text"
                                    name="name" id="name"
                                    className="form-control"
                                    value={nomeValue}
                                    onChange={e => {
                                        console.log(e.target.value)
                                        setNameValue(e.target.value)
                                    }}
                                />

                                <label htmlFor="email">Email: </label>
                                <input
                                    type='text'
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    value={emailValue}
                                    onChange={e => {
                                        console.log(e.target.value)
                                        setEmailValue(e.target.value)
                                    }}
                                />

                                <label htmlFor="telefone" >Tel: </label>
                                <input
                                    type="tel"
                                    name="telefone"
                                    id="telefone"
                                    className="form-control"
                                    value={telefoneValue}
                                    onChange={e => {
                                        console.log(e.target.value)
                                        setTelefoneValue(e.target.value)
                                    }}
                                />

                                <label htmlFor="senha" >Senha: </label>
                                <input
                                    type="password"
                                    name="senha"
                                    id="senha"
                                    className="form-control"
                                    value={senhaValue}
                                    onChange={e => {
                                        console.log(e.target.value)
                                        setSenhaValue(e.target.value)
                                    }}
                                />



                                <button type='submit' className="btn btn-success mt-4" type="submit">Entrar</button>

                            </form>
                        </div>
                        <button className='btn form-control' onClick={e => {
                            setCadastroOuLogin(e.target.value)
                        }} value={'login'} >Já possuo uma conta</button>
                    </div>
                </div>

            </div>
        )
    }


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
            return <Login />
        } else {
            return <Cadastro />
        }
    }

    return (

        <div>
            <UserMenu />
        </div>
    )

}