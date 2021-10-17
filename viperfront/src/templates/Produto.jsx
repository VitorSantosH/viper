import React, { useState, useEffect } from "react";
import api from '../services/api'
import './Produto.css'

export default props => {

    const [produto, setProduto] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        api.get(`produto/${props.match.params.id}`)
            .then((produtoRetornado) => {
                setProduto(produtoRetornado.data[0]);
                setIsLoaded(true);
              //  console.log(produtoRetornado.data[0])
            }).catch((err)=> {
                setIsLoaded(true)
                setError(true)
            })
    },[]);

    var produtoHTML = {}
    if(isLoaded){
        produtoHTML = (
            <div style={{maxHeight: '50px'}}>
                 <div className="col-md-6 border-end">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="main_image"> <img src="https://i.imgur.com/TAzli1U.jpg" id="main_product_image" width="350"/> </div>
                            <div className="thumbnail_images">
                                <ul id="thumbnail">
                                    <li><img onclick="changeImage(this)" src="https://i.imgur.com/TAzli1U.jpg" width="70"/></li>
                                    <li><img onclick="changeImage(this)" src="https://i.imgur.com/w6kEctd.jpg" width="70"/></li>
                                    <li><img onclick="changeImage(this)" src="https://i.imgur.com/L7hFD8X.jpg" width="70"/></li>
                                    <li><img onclick="changeImage(this)" src="https://i.imgur.com/6ZufmNS.jpg" width="70"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>

            <div>

            <span>{produto.name}  20-50 mm</span>
            <br />
            <span>Preço: R${produto.value}</span>

            <div >
                <label htmlFor="inputDiametro">Diâmetro </label>
            </div>
            <div className='divSelect'>
                <select name="inputDiametro" className="inputDiametro" >
                    <option value="20">Selecione um diâmetro</option>
                    <option value="20">20 milímetros</option>
                    <option value="21">21 milímetros</option>
                    <option value="22">22 milímetros</option>
                    <option value="23">23 milímetros</option>
                    <option value="24">24 milímetros</option>
                    <option value="25">25 milímetros</option>
                    <option value="26">26 milímetros</option>
                    <option value="27">27 milímetros</option>
                    <option value="28">28 milímetros</option>
                    <option value="29">29 milímetros</option>
                    <option value="30">30 milímetros</option>
                    <option value="31">31 milímetros</option>
                    <option value="32">32 milímetros</option>
                    <option value="33">33 milímetros</option>
                    <option value="34">34 milímetros</option>
                    <option value="35">35 milímetros</option>
                    <option value="36">36 milímetros</option>
                    <option value="37">37 milímetros</option>
                    <option value="38">38 milímetros</option>
                    <option value="39">39 milímetros</option>
                    <option value="40">40 milímetros</option>
                    <option value="41">41 milímetros</option>
                    <option value="42">42 milímetros</option>
                    <option value="43">43 milímetros</option>
                    <option value="44">44 milímetros</option>
                    <option value="45">45 milímetros</option>
                    <option value="46">46 milímetros</option>
                    <option value="47">47 milímetros</option>
                    <option value="48">48 milímetros</option>
                    <option value="49">49 milímetros</option>
                    <option value="50">50 milímetros</option>
                </select>
             </div>

            </div>



        </div>
        )
    }
 
    if (error) {
        return <div>Error: </div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {

        return (
            <div className='conteudo'>  {produtoHTML} </div>
        )
    }

}


