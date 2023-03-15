var express = require('express');
var router = express.Router();

/* get home page. */
router.get('/', function(req, res, next){
    res.render('new',{title: 'cadastro'})
});

module.exports = router;