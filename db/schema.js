const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const productSchema = new Schema({
  // example of optional fields
  // title:        { type: String, required: true },
  // description:  { type: String },
  // upVotes:      { number: String, default: 0 },

     names:       {type:String, required:true},
     description: {type:String},
     imgLink:     {type:String},
     price:       {type:Number,required:true },
     warranty:    {type:Boolean, default: false},


})



module.exports = {
   /*
    * NOTE: you would ideally change the export-value and the model-name
    */
  Product: createModel('Product', productSchema)
}
