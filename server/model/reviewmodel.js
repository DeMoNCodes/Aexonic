import  Mongoose  from "mongoose";

const reviewSchema  =  Mongoose.Schema({
    _id: { type: Mongoose.Schema.Types.ObjectId, required: true, default: function () { return new Mongoose.Types.ObjectId() } },
    review:{type:String},
    rating:{type:Number},
    movie:{type: Mongoose.Schema.Types.ObjectId,ref:"movie"},
    username:{type:String},
    userimage:{type:String}
},{timestamps:true})


export default Mongoose.model("review",reviewSchema);