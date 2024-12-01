const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const categorySchema = new Schema({
    category_name: {
        type: String,
        unique: true, 
        required: true,
    },
    
    category_pic: {
        type: String,
        required: true, 
        unique: true,
    },
    category_type: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const categoryModel = db.model('category models', categorySchema); 

module.exports = categoryModel;

