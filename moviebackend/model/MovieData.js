const mongoose=require ('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDescription:String,
    movieDirector:String,
    movieImage:String
})

const MovieData=mongoose.model('moviedetail',movieSchema);
module.exports=MovieData;