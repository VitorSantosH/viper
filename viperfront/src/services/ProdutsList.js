import React, { useEffect, useState } from "react"
//import Card from "../templates/cards";
import api from "./api";


export default function MyProducts() {

    const [products, setProducts] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxNTlmZDQwNmRkM2ZiYzExZjZjZGFlMCIsImFkbWluIjowLCJpYXQiOjE2MzMzMDU3ODksImV4cCI6MTYzMzU2NDk4OX0.kcU8HajZQkON-x4MY7QL4LUWAi6apDc_--UUuil84V0'
    const user = {
        nome: "Vítor",
        idade: 48,
        id: "testeId"
    }
    useEffect(() => {

        api.post('', {
            teste: 'deu certo',
            user: user
        },
            {
                headers: {
                    'Authorization' : authorization,
                    'teste': "AQUI PORRA"
                },
               
            }
        )
            .then((res) => {
                console.log(res)
                setProducts(JSON.parse(JSON.stringify(res.data)));
                setIsLoaded(true);
                console.log(products)
            })
            .catch((err) => {
                console.log(`erro: ${err}`)
                setIsLoaded(true);
                setError(err)
            })


    }, []);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {

        return (
            <Card key={products.data} products={products} />
        )
    }

}


/*


    <ul key={products.data}>
                {products.teste}
            </ul>

    useEffect(() => {
        fetch("http://localhost:3030/")
            .then(res => {

                JSON.parse(res)

            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, []);
*/
