const mongoose = require("mongoose");

const AllergenSchema = new mongoose.Schema({
//keep the ingredient that use is allergen to customer
 name : {
    type: String ,
    required: true
 }

})

module.exports = mongoose.model("Allergy",AllergenSchema);