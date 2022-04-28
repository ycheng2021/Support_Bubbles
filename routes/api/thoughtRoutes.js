const router = require('express').Router();

const {
    getPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController.js')

router.route('/').get(getPosts).post(createPost);

router
    .route('/:postId')
    .get(getSinglePost)
    .put(updatePost)
    .post(addReaction)
    .delete(deletePost)

router
    .route('/:reactionId')
    .delete(removeReaction)
module.exports = router;