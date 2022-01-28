const router = require('express').Router();


const commentRoutes = require('./comment-routes.js');


router.use('/comments', commentRoutes)

module.exports = router;