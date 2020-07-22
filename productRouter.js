const express = require('express')
const router = express.Router()
const productController = require('./controller')
const { deleteProduct } = require('./controller')
//Get
router.get('/',productController.getController)

//post
router.post('/',productController.postController)
//Get
router.get('/:id',productController.getSingleProduct)

//put
router.put('/:id',productController.updateProduct)

//delete
router.delete('/:id',productController.deleteProduct)

module.exports = router