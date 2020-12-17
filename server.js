//import modules
const express = require('express')
//morgan initialize
const morgan = require('morgan')


//import productRouter
const productRoute = require('./productRouter')

const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/product-db')
const db = mongoose.connection
db.on('error',(err)=>console.log(err))
db.once('open',()=>console.log("Database Connected Successfully"))


//create app
const app = express()
app.use(morgan('dev'))
//use cors api
app.use(cors())
app.use('/api/products',productRoute)
//use body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//create route to access url on a specific port
//forward slash('/') indicates base url address
app.get('/', (req,res)=>{
res.send('<h1>Available Products</h1>')
})
//create server which listen a specific port
//server get this port number using env(environment variable)
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
