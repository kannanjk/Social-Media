import comments from "../Models/Comments.js";
import PostModel from "../Models/PostModel.js"

export const createComment = async (req, res) => {
    console.log("kannan");
    console.log(req.body);
    try {
        const { content, postId, user ,firstname} = req.body
        const newComment = new comments({
            content:content,
            postId:postId,
            userId:user, 
            firstname:firstname
        })

        await PostModel.findOneAndUpdate({ _id: postId }, {
            $push: { comments: newComment._id }
        }, { new: true })
        await newComment.save()
        res.status(200).send({ success: true, message: "comment success" })
    } catch (error) {
        console.log(error);
    }
}

export const getComments = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await comments.find({ postId: id });
        res.status(200).send({ data: result, success: true })
    } catch (error) {
        res.status(500).json(error)
    }
}