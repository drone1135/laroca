const express = require('express');
const router=express.Router();
const db=require('../modules/database/database');
const bodyParser = require('body-parser');

//retorna todos los rubros
router.get('/rubro',(req,res)=>{
  
    db.query('CALL Sp_GetRubros',(err,rows,fields)=>{
        if(!err){
           return res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
}); 
router.use(bodyParser.urlencoded({ extended: false }));
//inserta un rubro
router.post('/rubro',(req,res)=>{
    let body=req.body;
    
    db.query(`CALL Sp_AddRubro(${body.Descripcion})`,(err,rows,fields)=>{
        if(!err){
            res.json({rows});
        }else{
            console.log(err);
        }       
    }) ;
});
//actualiza un rubro
router.put('/rubro/:IDRubro',(req,res)=>{
    let id=req.params.IDRubro;
    let body=req.body;
    
    db.query(`CALL Sp_UpdateRubro(${id},${body.Descripcion})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
});
//elimina un rubro
router.delete('/rubro/:IDRubro',(req,res)=>{
    let id=req.params.IDRubro;
   
    db.query(`CALL Sp_DeleteRubro(${id})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    });
});

module.exports = router;