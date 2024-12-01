const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const ordersSchema = new Schema({
    //cleint details
    client_name: {
        type: String,
        required: true,
    },
    client_gender: {
        type: String, 
        required: false,
    },
    client_address: {
        type: String, 
        required: true,
    },
    client_phone_number: {
        type: Number,
        required: true,
    },
    // Cloth Details
    cloth_id: {
        type: String, 
        required: true,
    },
    cloth_category_id: {
        type: String, 
        unique : false,
        required: true,
    },

    cloth_category_pic: {
        type: String,
        required: true, 
        unique: false,
    },
    cloth_Pic: {
        type: String,
        required: false, 
        unique: false,
    },
    // delivery date and mesurement details
    mark_urgent: {
        type: Boolean,
        required : true,
    },
    measurement_dress_given: {
        type: Boolean,
        required : true,
    },

    delivery_date: {
        type: String,
        required: true,
    },

    reminder_date: {
        type: String,
        required: true,
    },
    
    //upper
    upper_length: {
        type: Number,
        required: true,
    },
    shoulder: {
        type: Number,
        required: true,
    },
    chest: {
        type: Number,
        required: true,
    },
    upper_waist: {
        type: Number,
        required: true,
    },
    upper_hip: {
        type: Number,
        required: true,
    },
    gher: {
        type: Number,
        required: true,
    },
    arm_length: {
        type: Number,
        required: true,
    },
    arm_length_type: {
        type: String,
        required: true,
    },
    around_arm: {
        type: Number,
        required: true,
    },
    wrist: {
        type: Number,
        required: true,
    },
    collar_front: {
        type: Number,
        required: true,
    },
    collar_back: {
        type: Number,
        required: true,
    },
    //lower
    lower_length: {
        type: Number,
        required: true,
    },
    lower_waist: {
        type: Number,
        required: true,
    },
    lower_hip: {
        type: Number,
        required: true,
    },
    around_leg: {
        type: Number,
        required: true,
    },
    mori: {
        type: Number,
        required: true,
    },

    //payment status
    total_amount: {
        type: Number,
        required: true,
    },
    advanced_amount: {
        type: Number,
        required: true,
    },
    due_amount: {
        type: Number,
        required: true,
    },

    //special instruction
    spc_instruction: {
        type: String,
        required: false,
    },
   
}, { timestamps: true });


const ordersModel = db.model('orders models', ordersSchema); 

module.exports = ordersModel;