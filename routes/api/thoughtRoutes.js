const router = require('express').Router();

const {
    getPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
} = require('../../controllers/thoughtController.js')

router.route('/').get(getPosts).post(createPost);

router
    .route('/:postId')
    .get(getSinglePost)
    .put(updatePost)
    .delete(deletePost);

module.exports = router;