const express = require('express');
const router=express.Router();
const db=require('../modules/database/database');
const bodyParser = require('body-parser');
var body=bodyParser.json();
router.post('/comanda',body,(req,res)=>{
   let body=req.body;
//   console.log("IDProducto:"+body.MovimientosComandas.IDProducto);
      db.query(`CALL SP_AddComanda(${body.IDCliente},${body.Fecha},${body.Total},${body.Numeracion},'${JSON.stringify(body.MovimientosComandas)}')`,(err,rows,fields)=>{
          if(!err){
              res.json(rows);
          }else{
              console.log(err);
          }       
      })
});
module.exports = router;