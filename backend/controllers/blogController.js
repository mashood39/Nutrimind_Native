const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
    const { content } = req.body

    if (!content) {
        return res.status(400).json({ message: 'Content is required.' });
    }

    try {
        const newBlog = new Blog({ content })
        await newBlog.save();
        res.status(200).json({ message: "Blog added succesfully" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error in saving the blog' })
    }
}

//get all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        console.log(blogs)
        res.status(200).json({ blogs })
    }
    catch (error) {
        console.error("error in fetching titles", error);
        res.status(500).json({ message: "error fetching titles from database", error: error.message })
    }
}

// get a single blog by id
const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).send('Blog not found')
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error in saving the blog.' });
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlog
}