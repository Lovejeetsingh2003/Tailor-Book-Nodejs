const userServices = require('../service/user_service');


exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const successReg = await userServices.registerUser(email, password);

        res.json({ status: true, success: "User Successfully registered" });
    } catch (error) {
        throw error;
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user =await userServices.checkUser(email);

        if (!user) {
            res.json("User Doesn't Exist");
        }


        const isMatch =await user.comparePassword(password);

        if (isMatch === false) {
            res.json("Password Invalid");
        }

        let tokenData = { _id: user._id, email: user.email };

        const token = await userServices.getToken(tokenData, "secretKey", '1h');

        res.status(200).json({status:true,token:token});
    } catch (error) {
        throw error;
    }
}

exports.forgot = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await userServices.checkUser(email);

        if (!user) {
            res.json("User Doesn't Exist");
        }

        const isMatch = await user.comparePassword(password);

        if (isMatch === false) {
            res.json("Password Invalid");
        }

       
        const successReg = await userServices.changePassword(email,password);

        res.json({ status: true, success: "User Password Changed Successfully.",successReg:successReg});


    } catch (error) {
        throw error;
    }
}