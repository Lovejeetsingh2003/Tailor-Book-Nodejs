const { json } = require('body-parser');
const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user_model');
const bcrypt = require('bcrypt');


class userServices{

    static async registerUser(email, password) {
        try {
            const createuser = new UserModel({ email, password });
            return await createuser.save();
        
    } catch (error) {
        throw error;
    }
    }

     static async changePassword(email,password) {
         try {
            return  await UserModel.updateOne({email: email, password : password});
        
    } catch (error) {
        throw error;
    }
    }
    
    static async checkUser(email) {
        try {
            
            return await UserModel.findOne({ email }); 
        } catch (error) {
            throw error
        }
    }

  

    static async getToken(tokenData, secretKey, jwt_expire) {
        return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
    }
}

module.exports = userServices;