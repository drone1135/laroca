const express = require('express');
const router=express.Router();
const db=require('../modules/database/database');
const bodyParser = require('body-parser');
router.get('/cliente',(req,res)=>{
    db.query('CALL SP_GetClientes',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    });
}); 
router.use(bodyParser.urlencoded({ extended: false }));
router.post('/cliente',(req,res)=>{
    let body=req.body;
    db.query(`CALL Sp_AddCliente(${body.Nombre},${body.Direccion},${body.Telefono})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    })
});
router.post('/clienteByNombre',(req,res)=>{
    let nombre=req.body.Nombre;
    db.query(`CALL Sp_GetClientesByNombre(${nombre})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    })
});
router.post('/clienteByDireccion',(req,res)=>{
    let Direccion=req.body.Direccion;
    db.query(`CALL Sp_GetClientesByDireccion(${Direccion})`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }       
    })
});
router.post('/clienteByTelefono',(req,res)=>{
    let Telefono=req.body.Telefono;
    db.query(`CALL Sp_GetClienteByTelefono(${Telefono})`,(err,rows,fields)=>{
        if(!err){
            res.json(
                {
                    rows
            });
        }else{
            console.log(err);
        }       
    })
});
router.put('/cliente/:IDCliente',(req,res)=>{
    let IDCliente=req.params.IDCliente;
    let body=req.body;
    db.query(`CALL Sp_UpdateCliente(${IDCliente},${body.Nombre},${body.Direccion},${body.Telefono})`,(err,rows,fields)=>{
        if(!err){
            res.json(
                {
                    rows
            });
        }else{
            console.log(err);
        }       
    })
});
router.delete('/cliente/:IDCliente',(req,res)=>{
    let IDCliente=req.params.IDCliente;
    db.query(`CALL SP_DeleteCliente(${IDCliente})`,(err,rows,fields)=>{
        if(!err){
            res.json(
                {
                    rows
            });
        }else{
            console.log(err);
        }       
    });
});
module.exports = router;