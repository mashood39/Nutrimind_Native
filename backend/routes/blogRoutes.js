const express = require('express');
const { createBlog, getBlogs  , getBlog} = require('../controllers/blogController');

const router = express.Router();

router.post('/', createBlog )

// router.get('/title' , getBlogs )

// get all blogs
router.get('/', getBlogs)

// get a single blog by id
router.get('/:id' , getBlog)

module.exports = router;