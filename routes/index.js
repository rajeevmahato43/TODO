var express = require('express');
var router = express.Router();
var todoservice=require('../service/todoappService')

/* GET home page. */
router.get('/', function(req, res, next) {

            res.render('index');


});
router.get('/delete/:id', function(req, res, next) {
    todoservice.Delete(req.params.id,function (err,data) {
        if(err){
            return res.send(err).status(500)
        }else{
            res.redirect('/')
        }
    })


});
router.get('/markcomplete/:id', function(req, res, next) {

    todoservice.Update(req.params.id,function (err,data) {
        if(err){
            return res.send(err).status(500)
        }else{
            res.redirect('/')
        }
    })


});

router.post('/list', function(req, res, next) {
    todoservice.List(req.body,function (err,data) {
        if(err){
            return res.send(err).status(500)
        }else{
            res.send(data);
        }
    })


});
router.post('/', function(req, res, next) {
    todoservice.Create(req.body,function (err,data) {
        if(err){
          return res.send(err).status(500)
        }else{
          res.redirect('/')
        }
    })
});

module.exports = router;
