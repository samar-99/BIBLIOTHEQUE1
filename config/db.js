const {Sequelize} = require('sequelize');
const mysql = require('mysql2');


// parametres base de donnees
const dbName = 'bibliotheque'   // nom de la base de donnee
const dbUser = 'root'
const dbPassword = ''
const dbHost = 'localhost'

const sequelize = new Sequelize(dbName,dbUser, dbPassword,
    {
        host: dbHost,
        dialect: 'mysql'
    });



const connexion = async () =>{
    try{
        await sequelize.authenticate();
        console.log('connexion etabli')
        await sequelize.query(' CREATE DATABASE IF NOT EXISTS  bibliotheque')
        await sequelize.sync({alter:true})
    }
    catch(error){
        console.error('error connexion', error)
    }
}

module.exports = {
    sequelize,
    connexion
}