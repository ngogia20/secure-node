var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	console.log("There you go");
    res.send([{name:'Teachers'}, {name:'100 Pipers'}]);
});

module.exports = router;
