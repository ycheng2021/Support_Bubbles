const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)
    .post(addReaction)

router
    .route('/reactions/:reactionId')
    .delete(removeReaction)
module.exports = router;