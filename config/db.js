let mysql=require('mysql');

module.exports=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'555325',
    database:'wish'
})