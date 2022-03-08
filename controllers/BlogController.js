const Blog = require('../models/blog');

//Index
const index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('home', { title: 'Home', blogs: result });
    })
    .catch((err) => {
        console.log(err);
    });
};

//Create
const create = (req, res) => {
    res.render('create', { title: 'New Post' });
};

//Store
const store = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then(() => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    })
};

//Show
const show = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details', { blog: result, title: id });
    })
    .catch((err) => {
        console.log(err)
    });
};

//Delete
const del = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(() => {
        res.json({ redirect: '/' });
    })
    .catch((err) => {
        console.log(err)
    });
};

module.exports = {
    index,
    create,
    store,
    show,
    del,
};

