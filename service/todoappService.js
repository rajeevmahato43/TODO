//creating modelof battle
var TODO=require('../model/todoapp')
var todoApp = {
    Create:function (data,cb) {
        console.log(data)
        TODO.create(data, function (err, data) {
            if (err) {
                cb(err)
            }else {
                cb(null,"success")
            }
            // saved!
        })

    },
    List:function (data,cb) {
       console.log(data)
       var datatablesQuery = require('datatables-query'),
            params = data,
            query = datatablesQuery(TODO);

        query.run(params).then(function (data) {
            console.log(data)
            cb(null,data);
        }, function (err) {
           // console.log(err)
            cb(err)
        });
    },
    Delete:function (id,cb) {
TODO.update({_id:id},{$set:{Isdeleted:true}},function (err,data) {
    if (err) {
        cb(err)
    }else {
        cb(null,"success")
    }
})
    },
    Update:function (id,cb) {
        TODO.update({_id:id},{$set:{status:true}},function (err,data) {
            if (err) {
                cb(err)
            }else {
                cb(null,"success")
            }
        })
    },
    Search:function () {

    }
}


module.exports = todoApp