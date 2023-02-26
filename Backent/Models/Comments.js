import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
        tag: Object,
        reply: mongoose.Types.ObjectId,
        likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
        user: { type: mongoose.Types.ObjectId, ref: 'user' }
},
{
    timestamps: true
}
)

const commentModel = mongoose.model("comment", commentSchema)
export default commentModel