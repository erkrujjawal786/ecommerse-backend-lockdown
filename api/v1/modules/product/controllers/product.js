const Product = require('../models/product');
const { validationResult } = require('express-validator')


class Products {

    createProduct(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }

        const { prodName, prodDesc, prodPrice, flatDiscount, discountAmount, basePrice } = req.body
        const image = req.file
        if (!image) {
            res.status(404).json({ message: 'image not found' })
        }
        const prodImage = image.path;
        const product = new Product({
            productName: prodName,
            productDesc: prodDesc,
            productImage: prodImage,
            productPrice: prodPrice,
            basePrice: basePrice
        })
        product.save()
            .then(prods => {
                console.log('product created successfully', prods)
            })
            .catch(err => {
                console.log(err)
                // res.status(500).json({message:"product not created",error:err})
            })
    }

    getProducts(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        Product.find()
            .then(allprods => {
                console.log(allprods)
                res.json({ message: "Products lists success", products: allprods })
            })
            .catch(err => {
                res.status(500).json({ message: "Products not found", error: err })
            })

    }

    updateProducts(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        const { productId, prodName, prodDesc, prodPrice, flatDiscount, discountAmount, basePrice } = req.body
        const image = req.file
        if (!image) {
            res.status(404).json({ message: 'image not found' })
        }
        const prodImage = image.path;
        Product.findById(productId)
            .then(product => {
                console.log('==========', product)
                if (!product) {
                    const error = new Error('Could not find product')
                    throw error;
                }
                product.productName = prodName,
                    product.productDesc = prodDesc,
                    product.productImage = prodImage,
                    product.productPrice = prodPrice,
                    product.discountAmount = discountAmount
                product.basePrice = basePrice
                return product.save()
            })
            .then(result => {
                res.status(200).json({ status: true, message: 'product updated', product: result })
            })
            .catch(err => {
                res.json({ status: false, message: 'product not updated', error: err })
            })
    }

    deleteProduct(req, res, next) {
        console.log('chutiyapa')
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        console.log('req.body-==================', req.body)
        const { id } = req.body
        Product.findByIdAndUpdate({ _id: id }, { $set: { isDeleted: true } })
            .then(result => {
                console.log(result)
                res.json({ message: 'Product deleted successfully', deletedProduct: result })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Product not deleted', error: err })
            })


    }

}

module.exports = new Products()