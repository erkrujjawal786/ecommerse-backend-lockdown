"use strict"

const { validationResult } = require('express-validator')
const Category = require('../models/category')

class Categorys {
    createCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }

        const { name } = req.body;
        const category = new Category({
            name: name
        })
        category.save()
            .then(result => {
                console.log(result, '====result')
                res.status(200).json({ message: 'category Created Successfully', category: result })
            })
            .catch(err => {
                console.log(err)
            })
    }


    updateCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        const { categoryId, name } = req.body
        Category.findById(categoryId)
            .then(category => {
                if (!category) {
                    const error = new Error('Could not find category')
                    throw error;
                }
                category.name = name
                return category.save()
            })
            .then(result => {
                res.status(200).json({status:true, message: 'Category updated', category: result })
            })
            .catch(err => {
                res.json({status:false,message:'category not updated',data:err})
            })

    }

    deleteCategory(req, res, next) {
        console.log('============================req ke under')
       const { _id } = req.body
        Category.findByIdAndUpdate({_id:_id},{$set:{isDeleted:true}})
        .then(res=>{
            res.status(200).json({message:'producted deleted successfully',delectedCategory:res})
        })
        .catch(err=>{
            res.json({status:false,message:'category not updated',data:err})
        })
    }

    readCategory(req,res,next){
        Category.find({ isDeleted:false })
        .then(result=>{
            res.status(200).json({message:'All category list',categoryList:result})
        })
        .catch(err => {
            console.log(err)
        })

    }


}


module.exports = new Categorys();