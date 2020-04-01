var mongoose = require('mongoose');
var modelSchema = mongoose.Schema({
    
    description: {
        type: String,
        minlength: [6, "La descripcion es muy corta"],
        maxlength: [20, "La descripcion es muy larga"]
    },
    flavor: {
        type: String,
        enum: ["Chocolate", "Vainilla"],
        required: ["Escoja un sabor valido"]
    },
    price: {
        type: Number,
        required: "Indique un precio valido"
    },
    picture: {
        type: String
    }
});
var cerebro = mongoose.model("cerebro", modelSchema);
module.exports = cerebro;