var express = require('express');
var router = express.Router();

router.post("/getUserById", function(req, res, next) {
    var uid = req.body.uid;
    res.json({
        "data": {
            id: 1,
            name: "admin",
            address: "西安市宝塔山"
        },
        "success": true
    })
});

module.exports = router;