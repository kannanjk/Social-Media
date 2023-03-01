import express from "express";
import { commentPost, createPost, deletePost, getPost, getTimeLinePost, likePost, updatePost } from "../Controllers/PostController.js";
const router = express.Router()
 
router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.put('/:id/like', likePost)
router.put('/:id/dlte', deletePost)
router.get('/:id/timeline', getTimeLinePost)
router.post('/:id/comment',commentPost)
 
export default router                                  