var express = require('express');
var router = express.Router();

router.post("/add", function(req, res, next) {
    console.log(req.body);
    res.json({
        "data": null,
        "success": true
    });
});

module.exports = router;