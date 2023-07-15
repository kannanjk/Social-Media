import express from 'express'
import { createStory, getStory } from '../Controllers/StoryController.js'

const app = express()

app.post('/addStory',createStory) 

app.get('/:id/getStory',getStory)

export default app 