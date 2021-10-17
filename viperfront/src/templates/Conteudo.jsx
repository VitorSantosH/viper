import React, { useEffect, useState } from "react";
import api from '../services/api'
import './Conteudo.css'
import main from '../config/auth'
import { Link } from 'react-router-dom'
const baseUrl = main.baseUrl

export default props => {
    const [products, setProducts] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    //const authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxNTlmZDQwNmRkM2ZiYzExZjZjZGFlMCIsImFkbWluIjowLCJpYXQiOjE2MzMzMDU3ODksImV4cCI6MTYzMzU2NDk4OX0.kcU8HajZQkON-x4MY7QL4LUWAi6apDc_--UUuil84V0'


    useEffect(() => {

        api.get('',
            {
                headers: {
                   // 'Authorization': authorization,
                    'teste': "AQUI PORRA"
                },

            }
        )
            .then((res) => {

                console.log(res.data.ArrayProdutos);
                setProducts(res.data);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.log(`erro: ${err}`)
                setIsLoaded(true);
                setError(true)
                console.log('catch erro')
                console.log(isLoaded)
            })



    }, []);
    console.log(`is Loaded ${isLoaded}`)
    //console.log(products.ArrayProdutos[0])
    var listaProduct = []
    if (isLoaded) {
        listaProduct = products.ArrayProdutos.map((produto) => {
            return ( <div className="card" style={{maxWidth: "18rem;", maxHeight: '15vh'}} key={produto._id}>
                    <img className="card-img-top" src={`${baseUrl}imgs/buda.jpeg`} style={{maxWidth: '18rem'}} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{produto.name}</h5>
                        <p className="card-text">{produto.description}</p>
                        <Link to={`/${produto._id}`} className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            )
        })
    }




    if (error) {
        return <div>Error: </div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {

        return (
            <div className='conteudo' style={{maxWidth: '100vw', overflow: 'scroll', minHeight: '110vh'}}>  {listaProduct}  </div>
        )
    }

   
}