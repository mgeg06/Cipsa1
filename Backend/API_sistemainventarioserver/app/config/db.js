import { Sequelize } from "sequelize";

const db = new Sequelize( { 

    host    : 'localhost',
    port    : '3307',
    dialect : 'mysql',
    username: 'inventario',
    database: 'inventario03',
    password: 'Inventario03', 
    define  : {
        timestamps: true
    },
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
 });

export default db;