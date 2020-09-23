require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const passport = require('passport')
const {
    db
} = require('./db')
const app = express()
const port = process.env.PORT || 5000
const cookieSession = require('cookie-session');
require('./passport-setup')

// Helper
const helper = require('./helper')


// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
}))

app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());


// test DB
db.catch((err) => {
    console.log(err)
})



// require router
const auth = require('./routers/AuthRoute');

// Route
app.use(auth)
app.get('/', (req, res) => {
    res.json(helper.format_json(true, 'Hello world!'))
})


// Handle 404
app.use(function (req, res) {
    res.status(404).json(helper.format_json(false, "Your request not found.!"));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))