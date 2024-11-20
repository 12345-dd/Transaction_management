const transactionSchema = require("../models/transactionModel");

const createTransaction = async(req,res) => {
    try{
        const newTransaction = await transactionSchema.create(req.body);
        if(!newTransaction){
            res.status(404).json({
                message:"Error in Creating Transaction"
            })
        }else{
            res.status(201).json({
                message:"New Transaction Created Successfully",
                data:newTransaction
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const getAllTransactionOfUser = async(req,res) => {
    try{
        const {user_id} = req.query;
        const gettingUserTransaction = await transactionSchema.find({user:user_id});
        if(gettingUserTransaction.length === 0){
            res.status(404).json({
                message:"Failed To Get User Transaction",
            })
        } else {
            res.status(200).json({
                message:"Getting User's All Transaction Successfully",
                data:gettingUserTransaction
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const updateTransaction = async(req,res) => {
    try{
        const id = req.params.id;
        const body = req.body;

        const updatedTransaction = await transactionSchema.findByIdAndUpdate(id,body,{new:true});
        if(!updatedTransaction){
            res.status(404).json({
                message:"Error in Updating Transaction"
            })
        } else {
            res.status(201).json({
                message:"Transaction Updated Successfully",
                data:updatedTransaction
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const getTransactionById = async(req,res) => {
    try{
        const id = req.params.id;
        const findTransactionUsingId = await transactionSchema.findById(id);
        if(!findTransactionUsingId){
            res.status(404).json({
                message:"Error in Getting Transaction From Id"
            })
        } else {
            res.status(200).json({
                message:"Successfully Getting Transaction From Id",
                data:findTransactionUsingId
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

module.exports = {
    createTransaction,
    getAllTransactionOfUser,
    updateTransaction,
    getTransactionById
}