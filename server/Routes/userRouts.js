const express = require ("express")
const router = express.Router()
const Products = require('../Models/ProductModel')




router.get('/product', async (req,res)=>{
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        
    }
})




module.exports = router;