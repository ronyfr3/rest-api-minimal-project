//create database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
        name:{ type: String,
                trim: true,
                required: true,
                minlength: 10
                },
        price:{  type : Number,
                 minimum : 0,
                 required : true
                },
        sales_amount:{ type : Number,
                 minimum : 0,
                 required :true
                },
        stocks_product:{ type : Number,
                 minimum : 0,
                 required : true
                }
        })
const Product = mongoose.model('Product',ProductSchema)
module.exports = Product
