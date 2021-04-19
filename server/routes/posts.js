import express from 'express';
// User curly bracers when importing named export, not default
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controller/posts.js';



// Using express to route requests
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;

