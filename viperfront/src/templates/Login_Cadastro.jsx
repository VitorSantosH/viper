import React from "react";
import { Link } from 'react-router-dom'


export default (props) => {

    return (
        <div>
            <Link to="/cadastro">
                <button className='btn form-control'>Cadastrar</button>
            </Link>

            <Link to="/login">
                <button className='btn form-control'>Fazer Login</button>
            </Link>

        </div>
    )
}

/*
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
*/


