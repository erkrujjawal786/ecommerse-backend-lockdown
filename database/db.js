
const mongoose = require('mongoose')

class Database {
dbConnection(){
    return new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://localhost:27017/Ecommerse', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true,
        }).then(res=>{
           if(res){
               resolve(true)
           }else{
               resolve(false)
           }
        });
    })
}
}


module.exports = new Database();