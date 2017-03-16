var express = require('express');
var router = express.Router();

router.post("/list", function(req, res, next) {
    var uid = req.body.uid;
    res.json({
        "data": [{
            id: 1,
            title: "测试文章",
            content: "文章内容部分"
        }, {
            id: 4,
            title: "测试文章2",
            content: "文章内容部分2111"
        }, {
            id: 2,
            title: "测试文章3",
            content: "文章内容部分121"
        }, {
            id: 3,
            title: "测试文章4",
            content: "文章内容部分22211"
        }],
        "success": true
    })
});

module.exports = router;