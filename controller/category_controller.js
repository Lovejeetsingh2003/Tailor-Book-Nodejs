const categoryService = require('../service/category_service');


exports.addCategory = async (req, res, next) => {
    try {
        const {category_name,category_type,category_pic} = req.body;
       
        const successadd =  await categoryService.addCategory(category_name,category_type,category_pic);

        res.json({ status: true, success: "Category Successfully Added." });
    } catch (error) {
        throw error;
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.body;
        const successdel = await categoryService.deleteCategory(id);
        res.json({ status: true, success: "category Successfully Deleted." });
    } catch (error) {
        throw error;
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const { _id ,category_name,category_type,category_pic} = req.body;
        const successupdate = await categoryService.updateCategory(_id,category_name,category_type,category_pic);
        res.json({ status: true, success: "category Successfully Updated." });
    } catch (error) {
        throw error;
    }
}

exports.getCategory = async (req, res, next) => {
    try {
        const category = await categoryService.getCategory();
       
        res.send({
            data: category,
            total: category.length
        });
    } catch (error) {
        console.error("Error fetching category: ", error);
        res.status(500).json({ status: false, error: "Error fetching category." });
    }
}

exports.getCategoryById = async (req, res, next) => {
    try {
        var { id } = req.body; 
        const category = await categoryService.getCategoryById(id); 
        
        if (!category) {
            return res.status(404).json({ status: false, error: "category not found." });
        }
       
        res.send({
            data: category,  
            total: category.length        
        });
    } catch (error) {
        console.error("Error fetching category: ", error);
        res.status(500).json({ status: false, error: "Error fetching category." });
    }
};




