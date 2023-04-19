
import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Computadora = db.define( "tb_computadora",  {

  
    equipodecomputo : {
        type : DataTypes.STRING,
        allowNull : false,
       // 
        
    },   
                    
                    
    usuario : {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
        
    },          
                        
                        
    ubicacion  : {
        type : DataTypes.STRING,
        allowNull : false,
    },         
                        
                        
    ip:                 
                        
     {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
        
    },               
    estatus:            
     {
        type : DataTypes.STRING,
        allowNull : false,
    },              
                        
    marcamonitor :      
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },             
    modelomonitor:      
    {
        type : DataTypes.STRING,
        allowNull : false,
    },        
                        
    numeroserie:        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },              
                        
    procesador :        
    {
        type : DataTypes.STRING,
        allowNull : false,
    }, 
                        
    sistema :           
    {
        type : DataTypes.STRING,
        allowNull : false,
    },                 
                        
    memoria :           
    {
        type : DataTypes.STRING,
        allowNull : false,
    },                 
                        
    almacenamiento :    
    {
        type : DataTypes.STRING,
        allowNull : false,
    },                 
                        
    macethernet :       
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },              
    macwifi :           
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },               
    marcacpu :          
    {
        type : DataTypes.STRING,
        allowNull : false,
    },                
                        
    modelocpu :         
    {
        type : DataTypes.STRING,
        allowNull : false,
    },               
                        
    numeroseriecpu :    
    {
        type : DataTypes.STRING,
        allowNull : false,
    },               
                        
    marcateclado :      
    {
        type : DataTypes.STRING,
        allowNull : false,
    },               
                        
    modeloteclado :     
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },              
    numeroserieteclado: 
    {
        type : DataTypes.STRING,
        allowNull : false,
    },           
                        
    marcamause :        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },           
                        
    modelomause :       
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },           
    numeroseriemause :  
    {
        type : DataTypes.STRING,
        allowNull : false,
    },           
                        
    fechamante       
    : {
        type : DataTypes.DATE,
        allowNull : false
    },




});

// db.sync().then(() => {
//     console.log(' Tabla  creada con exito 😁');
//  }).catch((error) => {
//     console.error(' No se puede crear tabla 😑',  error);
//  });

export default Computadora;