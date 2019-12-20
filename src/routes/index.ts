import {Router} from 'express'
import {getPosts, savePost, getPost, deletePost, updatePost} from '../controller/IndexController'

const router = Router();

router.route('/posts')
      .get(getPosts)
      .post(savePost)

router.route('/posts/:id')
      .get(getPost)
      .delete(deletePost)
      .put(updatePost)

export default router