const mysql=require('mysql');

const mysqlconnection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cardar11',
    database: 'LaRoca',
    multipleStatements:true
});

mysqlconnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }

});

//mysqlconnection.end();

module.exports = mysqlconnection;