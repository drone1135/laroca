const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('seleccione un módulo');
});
app.use(require('./rubro'));
app.use(require('./UMedida'));
app.use(require('./producto'));
module.exports = app;