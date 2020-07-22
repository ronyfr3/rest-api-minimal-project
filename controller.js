const Product = require('./ProductModel')

const getController =(req,res,next)=>{
    Product.find()
    .then(products=>{
        res.status(200).json({
            message: "All Products",
            products
        })
    })
    .catch(error=>{
        res.status(500).json({
            message:"Error Found",
            error
        })
    })
} 
const postController = (req,res,next)=>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        sales_amount: req.body.sales_amount,
        stocks_product: req.body.stocks_product
    })
    product.save()
    .then(data=>{
        res.status(201).json({
            message: 'product added',
            product: data
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"Error Found",
            error:err
          })
       })
}
const getSingleProduct = (req,res,next)=>{
    let name = req.params.name
    Product.findOne(name)
    .then(product=>{
        res.status(200).json({
            product
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'error found',
            error:err
        })
    })
}
const deleteProduct = (req,res,next)=>{
    let name = req.params.name
    Product.findOneAndDelete(name)
    .then(product=>{
        res.status(200).json({
            message:'product deleted successfully',
            product
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'error found',
            error:err
        })
    })
}
const updateProduct = (req,res,next)=>{
    let name = req.params.name

     let updateProducts = {
         name: req.body.name,
         price: req.body.price,
         sales_amount: req.body.sales_amount,
         stocks_product: req.body.stocks_product
     }

    Product.findOneAndUpdate(name,{$set:updateProducts})
    .then(product=>{
        res.status(200).json({
            message:'product updated successfully',
            product
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'error found',
            error:err
        })
    })
}





module.exports = {
    getController,
    postController,
    getSingleProduct,
    deleteProduct,
    updateProduct
}