
import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Usuario = db.define( "tb_usuario",  {


    nombre: {
        type : DataTypes.STRING,
        allowNull : false,
               
    },   
                    
                    
    apellidop : {
        type : DataTypes.STRING,
        allowNull: false,
       
        
    },          
                        
                        
    apellidom :      
                        
    {
        type : DataTypes.STRING,
        allowNull : false,
    },         
                        
                        
    planta:                 
                        
     {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
        
    },               
    area:            
     {
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
    },              
                        
            
    correo:      
    {
        type : DataTypes.STRING,
        allowNull : false,
    },    
           
            

});

db.sync().then(() => {
    console.log(' Tabla  usuario creada con exito 😁');
 }).catch((error) => {
    console.error(' No se puede crear tabla usuario 😑',  error);
 });

export default Usuario;