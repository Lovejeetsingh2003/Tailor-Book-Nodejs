const categoryModel = require('../model/category_model');

class categoryService{ 
    static async addCategory(category_name,category_type,category_pic) {
        try {

            const addcategory = new categoryModel({category_name,category_type,category_pic});
            return await addcategory.save();
        
    } catch (error) {
        throw error;
    }
    }

    static async deleteCategory(id) {
        try {
            
            return  await categoryModel.findByIdAndDelete(id);
        
    } catch (error) {
        throw error;
    }
    }
    
   static async updateCategory(_id,category_name,category_type,category_pic) {
         try {
            return  await categoryModel.updateOne({_id,category_name,category_type,category_pic});
        
    } catch (error) {
        throw error;
    }
    }

    static async getCategory() {
        try {
            return await categoryModel.find();
        } catch (error) {
            throw error;
        }
    }

  static async getCategoryById(id) {
    try {
        return await categoryModel.find({ _id : id });
    } catch (error) {
        throw error;
    }
}
}

module.exports = categoryService;