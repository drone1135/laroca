const express = require('express');
const router=express.Router();
const db=require('../modules/database/database');
const bodyParser = require('body-parser');

//retorna todos las unidades de medidas
router.get('/UMedida',(req,res)=>{
  
    db.query('CALL Sp_GetUMedidas',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
}); 
router.use(bodyParser.urlencoded({ extended: false }));
//inserta una unidad de medida
router.post('/UMedida',(req,res)=>{
    let body=req.body;
    
    db.query(`CALL Sp_AddUMedida(${body.Descripcion})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
});
//actualiza una unidad de medida
router.put('/UMedida/:IDUMedida',(req,res)=>{
    let id=req.params.IDUMedida;
    let body=req.body;
    
    db.query(`CALL Sp_UpUMedida(${id},${body.Descripcion})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    }) ;
});
//elimina un rubro
router.delete('/UMedida/:IDUMedida',(req,res)=>{
    let id=req.params.IDUMedida;
   
    db.query(`CALL Sp_DeleteUnidadMedida(${id})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    });
});

module.exports = router;