"use strict"

const { validationResult } = require('express-validator')
const Subcategory = require('../models/category')

class Subcategorys {
    createSubCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }

        const { name } = req.body;
        const subcategory = new Subcategory({
            name: name
        })
        subcategory.save()
            .then(result => {
                res.status(200).json({ message: 'subcategory Created Successfully', subcategory: result })
            })
            .catch(err => {
                res.status(500).json({message:"subcategory not created",error:err})
            })
    }


    updateSubCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        const { subcategoryId, name } = req.body
        Subcategory.findById(subcategoryId)
            .then(subcategory => {
                if (!subcategory) {
                    const error = new Error('Could not find subcategory')
                    throw error;
                }
                subcategory.name = name
                return subcategory.save()
            })
            .then(result => {
                res.status(200).json({status:true, message: 'subcategory updated', subcategory: result })
            })
            .catch(err => {
                res.json({status:false,message:'subcategory not updated',data:err})
            })

    }

    deleteSubCategory(req, res, next) {
       const { _id } = req.body
        Subcategory.findByIdAndUpdate({_id:_id},{$set:{isDeleted:true}})
        .then(res=>{
            res.status(200).json({message:'subcategory deleted successfully',delectedSubCategory:res})
        })
        .catch(err=>{
            res.status(500).json({status:false,message:'subcategory not deleted',data:err})
        })
    }

    readSubCategory(req,res,next){
        Subcategory.find({ isDeleted:false })
        .then(result=>{
            res.status(200).json({message:'All category list',SubcategoryList:result})
        })
        .catch(err => {
            res.status(500).json({message:"Not got subcategory", error:err})
        })

    }


}


module.exports = new Subcategorys();