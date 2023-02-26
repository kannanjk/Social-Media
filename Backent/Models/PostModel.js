import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: { type: String, required: true }, 
    desc: String, 
    likes: [],
    comments:[],
    image: String
},
    { 
        timestamps: true
    }
)

const PostModel = mongoose.model("Post",postSchema)
export default PostModel