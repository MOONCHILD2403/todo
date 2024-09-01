const mongoose = require("mongoose")
require('dotenv').config({path:"../.env"})

mongoose.connect(process.env.MONGO_URL);

const todoschema = new mongoose.Schema({
    title:String,
    description:String,
    done:Boolean
})

const todomodel = mongoose.model("todos",todoschema);

module.exports = {
    todomodel,
}


