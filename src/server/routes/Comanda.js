// const express = require('express');
// const router=express.Router();
// const db=require('../modules/database/database');
// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));
// router.post('/comanda',(req,res)=>{
//     let body=req.body;
//     db.query(`CALL AddComanda(${body.IDCliente},${body.Fecha},${body.Total},${body.Numeracion},${body.MovimientosComandas})`,(err,rows,fields)=>{
//         if(!err){
//             res.json(rows);
//         }else{
//             console.log(err);
//         }       
//     })
// });