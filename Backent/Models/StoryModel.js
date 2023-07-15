import mongoose from "mongoose"

const StorySchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: String,
    like: [],
    image: String
},
{
    timestamps:true
}
)

const StoryModel = mongoose.model("story",StorySchema)
export default StoryModel