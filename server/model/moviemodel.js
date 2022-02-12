import  Mongoose  from "mongoose";

const movieSchema  =  Mongoose.Schema({
    _id: { type: Mongoose.Schema.Types.ObjectId, required: true, default: function () { return new Mongoose.Types.ObjectId() } },
    name:{type:String},
    genre:{type:Array},
    details:{type:String},
    relesedate:{type:Date},
    upvote :{type:Number},
    downvote:{type:Number},
    image:{type:String}

},{timestamps:true})


export default Mongoose.model("movie",movieSchema);