import React from "react";



export default props => {


    return (
        <div>
            <h3>Criar itens</h3>
            <form className='form-control' action="">

                <div className="card-body">

                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" placeholder="Nome do Produto..." />

                    <label htmlFor="description">Descrição:</label>
                    <input type="text" name="description" id="description" placeholder="Descrição do Produto..."/>

                    <label htmlFor=""></label>
                </div>
            </form>

        </div>
    )
}