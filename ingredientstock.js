const mongoose = require("mongoose");


const IngredientSchema = new mongoose.Schema({

 name : {
    type: String ,
    required: [true,"Please add ingredient name"]
 },
 quantity:{
    type: Number,
    required: [true, "Please add quantity of ingredient"]
 },
 //Ingredient ไม่ควรน้อยกว่า 10 units ตาม Product Backlog 
 minimum_ingredient:{
    type:Number,
    default:10
 },
 restaurant :{
    type:  mongoose.Schema.ObjectId,
    ref : "Restaurant"
 }

})

module.exports = mongoose.model("Ingredient",IngredientSchema);