
import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Impresora = db.define( "tb_impresora",  {

  
    numeroImpresora :{
        type : DataTypes.STRING,
        allowNull : false,
       // 
        
    },   
                    
                    
    usuario : {
        type : DataTypes.STRING,
        allowNull: true,
        
        
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

    descripcion:      {
        type : DataTypes.STRING,
        allowNull : false,
    },        
            

});

db.sync().then(() => {
    console.log(' Tabla impresora creada con exito 😁');
 }).catch((error) => {
    console.error(' No se puede crear tabla  impresora😑',  error);
 });

export default Impresora;