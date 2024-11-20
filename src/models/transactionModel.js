const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tranactionSchema = new Schema({
    amount:{
        type:Schema.Types.Decimal128,
        required:true
    },
    transaction_type:{
        type:String,
        enum:["DEPOSIT","WITHDRAWL"],
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","COMPLETED","FAILED"],
        default:"PENDING"
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Transactions",tranactionSchema);