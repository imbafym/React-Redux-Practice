const express = require('express')
const mongoose = require('mongoose')


//connect Mongodb
const DB_URL = 'mongodb://127.0.0.1:27017/'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo2 connect success')
})
//mongo 有model 和schema 用mongoose封装方法来创建
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))
//增
User.create({user:'admin',age:18}, function(err,doc){
if(!err){
    console.log(doc)
}else{
    console.log(err)
}
})
//删
// User.remove({age:18},function(err,doc){
//    if(!err){
    // console.log(doc)
// }
// })
//改
// User.update({'name':undefined},{'$set':{age:21}},function(err,doc){
//     console.log(doc)
// })


const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.get('/data', function (req, res) {
    //查 一条的话就findone
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
  
})

app.listen(9093, function () {
    console.log('Node app start at 9093')
})