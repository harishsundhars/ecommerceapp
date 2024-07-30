
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const productsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   price: { type: Number },
   description: { type: String },
   specifications: { type: String },
   availablity: { type: String }
})

const productsModel = mongoose.model('products', productsSchema, 'products');
export default productsModel;
