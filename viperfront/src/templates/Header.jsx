import React from "react"
import { Link } from 'react-router-dom'
import api from '../services/api'


export default props => {

    const payload = JSON.parse(localStorage.getItem('payload')) || false

    function logout() {

        localStorage.payload = null
        localStorage.token = null
        window.location.href = api.baseURL

    }
    function verifyUser() {
        if (payload) {
            return (
                <div style={{ color: "white" }}>

                    <i class="fa fa-user"></i>

                    <span>{payload.name}</span>
                </div>
            )
        } else {
            return (
                <Link to={`/login_cadastro`}>
                    <i className="fa fa-user-o" aria-hidden="true" style={{ color: "white" }}></i>
                </Link>
            )
        }
    }

    const verificado = verifyUser()


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontSize: '1.5rem' }}>

            <div className="container-fluid">
                <a className="navbar-brand" href="#">Víper</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhosto:8081/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>

                    </ul>
                    <div>
                        {verificado}
                        <button className='btn form-control' style={{color:"white"}} onClick={e => logout()}>
                            Sair
                        </button>
                    </div>



                    {/*   <div >

                        <input className="form-control mr-sm-2" type="search" placeholder="Search" style={{ maxWidth: '250px' }} />
                        <button className="btn btn-outline-success my-2 my-sm-0" style={{ float: 'right' }} type="submit">Search</button>
                    </div>
                 */}
                </div>
            </div>
        </nav>
    )
}