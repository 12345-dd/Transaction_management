const userSchema = require("../models/userModel");

const createUser = async(req,res) => {
    try{
        const newUser = await userSchema.create(req.body);
        if(!newUser){
            res.status(404).json({
                message:"Failed to Create User"
            })
        }else{
            res.status(201).json({
                message:"User Created Successfully",
                data:newUser
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

module.exports = {createUser}

