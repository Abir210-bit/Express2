var express = require('express');
var router = express.Router();
var login = require('./login');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/* Login user */
router.post('/login', function (req, res, next) {
let username = req.body.username;
let loginResult = login(username, req.body.password);
if (loginResult) {
        res.render('home', {username: `Hello: ${username.split("@")[0]}`});
    }
    else {
        res.render('index', {error: true});
        console.log("erreur");
    }
});
module.exports = router;