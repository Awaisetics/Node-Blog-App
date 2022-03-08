const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//DB Connection
const dbURI = 'mongodb+srv://awais:awaismongo@cluster0.rsvgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
        console.log("Listnening To Port 3000");
    });
})
.catch((err) => console.log(err));

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(urlencoded({ extended: true }));

// Request Logger Middleware
// app.use((req, res, next )=>{ 
//     console.log('New Request Created');
//     console.log('Host' , req.hostname);
//     console.log('Path', req.path);
//     console.log('Method', req.method);
//     next();
// });

app.use(blogRoutes);

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.render('404', { title: '404' });
    res.status(404);
});
