import moviemodel from "../../model/moviemodel";
import reviewmodel from "../../model/reviewmodel";

export const getAllMovies = async (req,res,next)=>{
    try{
        if(req.body._id){
            let movies =  await moviemodel.find({...req.body});
            res.status(200).json({data:movies,status:true});
            return;
        }
        let movies =  await moviemodel.find({});
        res.status(200).json({data:movies,status:true});
    }catch(err){
        next(err);
    }
}

export const filterMovie = async(req,res,next)=>{
    try{
        let query = {$or:[ { genre: { "$regex": req.body.word, "$options": "i" }}, { name: { "$regex": req.body.word, "$options": "i" }}] };
        let data = await moviemodel.find(query);
        res.status(200).json({data,status:true});
    }catch(err){
        next(err);
    }
}
export const getcomment = async(req,res,next)=>{
    try{
        let data = await reviewmodel.find(req.body);
        res.status(200).json({data,status:true});
    }catch(err){
        next(err);
    }
}

export const upvote = async(req,res,next)=>{
    try{
        let _id  =  req.body._id;
        delete req.body._id;
        let data = await moviemodel.updateOne({_id},req.body);
        res.status(200).json({data,status:true});
    }catch(err){
        next(err);
    }
}
export const downvote = async(req,res,next)=>{
    try{
        let _id  =  req.body._id;
        delete req.body._id;
        let data = await moviemodel.updateOne({_id},req.body);
        res.status(200).json({data,status:true});
    }catch(err){
        next(err);
    }
}



export const top10 = async(req,res,next)=>{
    try{
        let data = await moviemodel.find({}).sort({ upvote:-1}).limit(12);
        res.status(200).json({data,status:true});
    }catch(err){
        next(err);
    }
}

export const sortBydate = async(req,res,next)=>{
    try{
        let value =  req.body.value;

        let data = await moviemodel.find({}).sort({ relesedate:value ? 1:-1})
        res.status(200).json({data,status:true});
    }catch(err){
        next(err);
    }
}

new moviemodel({
    name:"Fight Club",
    genre:["Drama"],
    details:"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    relesedate:new Date("11-11-1999"),
    upvote :"10",
    downvote:"1",
    image:"Figt_clubb.jpg"
}).save().then(result=>{
        console.log(result);
        new reviewmodel({
            review:"good",
            rating:8,
            movie:result._id,
            username:"Jhon",
            userimage:"user.png"
        }).save();
        new reviewmodel({
            review:"very nice",
            rating:9,
            movie:result._id,
            username:"smith",
            userimage:"user.png"
        }).save();
        new reviewmodel({
            review:"movie based on a war ",
            rating:9,
            movie:result._id,
            username:"michal",
            userimage:"user.png"
        }).save();
        new reviewmodel({
            review:"war",
            rating:6,
            movie:result._id,
            username:"javan",
            userimage:"user.png"
        }).save();
})


new moviemodel({
    name:"The Dark Knight",
    genre:["Action", "Crime", "Drama"],
    details:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    relesedate:new Date("7-18-1999"),
    upvote :"100",
    downvote:"1",
    image:"Figt_clubb.jpg"
}).save().then(result=>{
        console.log(result);
        new reviewmodel({
            review:"good",
            rating:8,
            movie:result._id,
            username:"Jhon",
            userimage:"user.png"
        }).save();
        new reviewmodel({
            review:"very nice",
            rating:9,
            movie:result._id,
            username:"smith",
            userimage:"user.png"
        }).save();
        new reviewmodel({
            review:"movie based on a war ",
            rating:9,
            movie:result._id,
            username:"michal",
            userimage:"user.png"
        }).save();
        new reviewmodel({
            review:"war",
            rating:6,
            movie:result._id,
            username:"javan",
            userimage:"user.png"
        }).save();
})

new moviemodel({
    name:"Forrest Gump",
    genre:["Drama", "Romance"],
    details:"The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    relesedate:new Date("07-06-1994"),
    upvote :"8",
    downvote:"0",
    image:"forestgump.jpg"
}).save().then(result=>{

})