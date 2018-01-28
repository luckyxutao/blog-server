var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 增加用户
router.get('/addUser', function (req, res, next) {
  userDao.add(req, res, next);
});

router.get('/queryAll', function (req, res, next) {
  userDao.queryAll().then(userlist=>{
    res.render('userlist',{
      userlist
    })
  })
});

module.exports = router;
