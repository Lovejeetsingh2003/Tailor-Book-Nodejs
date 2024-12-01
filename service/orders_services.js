const ordersModel = require('../model/order_model');

class orderService{ 
    static async addOrder(
        client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,
    ) {
        try {

            const addOrder = new ordersModel({client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,});
            return await addOrder.save();
        
    } catch (error) {
        throw error;
    }
    }

    static async deleteOrder(id) {
        try {
            
            return  await ordersModel.findByIdAndDelete(id);
        
    } catch (error) {
        throw error;
    }
    }
    
   static async updateOrder(_id,client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,) {
         try {
            return  await ordersModel.updateOne({_id,client_name, client_phone_number, client_address, client_gender, cloth_category_id, cloth_id, cloth_pic, cloth_category_pic, delivery_date, reminder_date,
        mark_urgent, measurement_dress_given, upper_length, shoulder, chest, upper_waist, upper_hip, gher, arm_length, arm_length_type, around_arm, wrist,
        collar_front,collar_back,lower_length,lower_waist,lower_hip,around_leg,mori,total_amount,advanced_amount,due_amount,spc_instruction,});
        
    } catch (error) {
        throw error;
    }
    }

    static async getOrder() {
        try {
            return await ordersModel.find();
        } catch (error) {
            throw error;
        }
    }

  static async getOrderById(id) {
    try {
        return await ordersModel.find({ _id : id });
    } catch (error) {
        throw error;
    }
}
}

module.exports = orderService;