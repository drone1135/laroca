const express = require('express');
const app = express();
app.use(require('./rubro'));
// app.get('/',(req,res)=>{
//     res.send('hola mundo');
// })

module.exports = app;