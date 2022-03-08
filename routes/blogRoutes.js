const express = require('express');
const blog = require('../controllers/BlogController');

const router = express.Router();

router.get('/', blog.index);

router.get('/blogs/create', blog.create);

router.post('/add', blog.store);

router.get('/post/:id', blog.show);

router.delete('/post/delete/:id',blog.del);

module.exports = router;