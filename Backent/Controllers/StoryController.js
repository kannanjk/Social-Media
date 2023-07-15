import StoryModel from '../Models/StoryModel.js'
import storyModel from '../Models/StoryModel.js'

// create story
export const createStory = async (req, res) => {
    const newStory = new storyModel(req.body)
    await newStory.save()
    res.status(200).send({
        success: true,
        message: "story Created"
    })
}

// get story
export const getStory = async (req, res) => {
    const id = req.params.id
    try {
        const story = await StoryModel.find({ userId: id })
        res.status(200).send({
            success: true,
            message: "story gote",
            data:story
        })
    } catch (error) {
        console.log(error);
    }
}