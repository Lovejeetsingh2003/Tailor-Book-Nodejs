const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        
        lowercase : true,
    }, password: { type: String, required: true, },
     
},{timestamps : true})

userSchema.pre('save', async function () {
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);
        user.password = hashpass;
    } catch (error) {
        throw error;
    }
})


userSchema.methods.comparePassword = async function (userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
    } catch (error) {
        throw error;
    }
}

const userModel = db.model('user model', userSchema);
module.exports = userModel;