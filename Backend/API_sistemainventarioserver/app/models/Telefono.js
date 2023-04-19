
import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Telefono = db.define( "tb_telefono",  {

  
    extencion: {
        type : DataTypes.STRING,
        allowNull : false,
               
    },   
                    
                    
    recepcion : {
        type : DataTypes.STRING,
        allowNull: false,
       
        
    },          
                        
                        
    departamento  : {
        type : DataTypes.STRING,
        allowNull : false,
    },         
                        
                        
    marca:                 
                        
     {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
        
    },               
    modelo:            
     {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
    },              
                        
    serie :      
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },             
    descripcion:      
    {
        type : DataTypes.STRING,
        allowNull : false,
    },    
    contra:      
    {
        type : DataTypes.STRING,
        allowNull : false,
    },    
    ip:      
    {
        type : DataTypes.STRING,
        allowNull : false,
    },        
            

});

db.sync().then(() => {
    console.log(' Tabla  telefono creada con exito 😁');
 }).catch((error) => {
    console.error(' No se puede crear tabla telefono 😑',  error);
 });

export default Telefono;