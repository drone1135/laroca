const express = require('express');
const router=express.Router();
const db=require('../modules/database/database');
const bodyParser = require('body-parser');

//retorna todos los productos
router.get('/producto',(req,res)=>{
  
    db.query('CALL Sp_Getproductos',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
}); 
router.use(bodyParser.urlencoded({ extended: false }));
//inserta un producto
router.post('/producto',(req,res)=>{
    let body=req.body;
   // console.log(body);
    db.query(`CALL Sp_AddProducto(${body.IDPrecioHistorico},${body.IDRubro},${body.Descripcion},${body.Precio},${body.CodArt},${body.TipoCoccion},${body.IDUnidadMedida})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
});
//actualiza un producto
router.put('/producto/:IDProducto',(req,res)=>{
    let id=req.params.IDProducto;
    let body=req.body;
    
   // console.log(id);
    db.query(`CALL Sp_UpdateProducto(${id},${body.IDPrecioHistorico},${body.IDRubro},${body.Descripcion},${body.Precio},${body.CodArt},${body.TipoCoccion},${body.IDUnidadMedida})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    });
});
//elimina un producto
router.delete('/producto/:IDProducto',(req,res)=>{
    let id=req.params.IDProducto;
   
    db.query(`CALL Sp_DeleteProducto(${id})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    });
});

module.exports = router;