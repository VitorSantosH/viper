const mongoose = require("mongoose")
const Schema = mongoose.Schema

function productSchema() {
    
    const Produto = new Schema ({
        name: {
            type: String,
            required: true 
        },
        description: {
            type: String,
            required: true 
        },
        imgs: [{
            type: String
        },],
        value: {
            type: Number, 
            required: true
        }
    })

    mongoose.model('Produtos',Produto)

}


module.exports = productSchema