const orderService = require('../service/orders_services');


exports.addOrder = async (req, res, next) => {
    try {
        const { client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,} = req.body;
       
        const successadd =  await orderService.addOrder( client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,);

        res.json({ status: true, success: "Order Successfully Added." });
    } catch (error) {
        throw error;
    }
}

exports.deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.body;
        const successdel = await orderService.deleteOrder(id);
        res.json({ status: true, success: "Order Successfully Deleted." });
    } catch (error) {
        throw error;
    }
}

exports.updateOrder = async (req, res, next) => {
    try {
        const { _id , client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,} = req.body;
        const successupdate = await orderService.updateOrder(_id, client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,);
        res.json({ status: true, success: "Order Successfully Updated." });
    } catch (error) {
        throw error;
    }
}

exports.getOrder = async (req, res, next) => {
    try {
        const order = await orderService.getOrder();
       
        res.send({
            data: order,
            total: order.length
        });
    } catch (error) {
        console.error("Error fetching order: ", error);
        res.status(500).json({ status: false, error: "Error fetching order." });
    }
}

exports.getOrderById = async (req, res, next) => {
    try {
        var { id } = req.body; 
        const order = await orderService.getOrderById(id); 
        
        if (!order) {
            return res.status(404).json({ status: false, error: "order not found." });
        }
       
        res.send({
            data: order,  
            total: order.length        
        });
    } catch (error) {
        console.error("Error fetching order: ", error);
        res.status(500).json({ status: false, error: "Error fetching order." });
    }
};




