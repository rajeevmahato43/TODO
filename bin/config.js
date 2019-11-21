var mongoose = require('mongoose');

// for the time being i just mention here. best practicec to use in ENV 


//creating mongodb connection.
mongoose.connect('mongodb+srv://rajeevKumar:Rajeev-raj@collegeerp-fstkn.mongodb.net/test1?retryWrites=true',{ useNewUrlParser: true,useUnifiedTopology: true  },function(err, connected){
    if(err){
        throw err;
    }else{
        console.log("Successfully connected");
    }

});
module.exports=mongoose;