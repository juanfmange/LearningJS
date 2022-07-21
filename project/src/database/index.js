const { MongoClient } = require('mongodb');
const { Config } = require('../config/index');
var connection = null;
//const debug = require('debug')('app:module-database');

module.exports.Database = (collection) => new Promise(async (resolve,reject)=>{
    try {
        if (!connection) {
            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect();
            console.log('nueva coneccion realizada con mongodb atlas o server');
        }
      console.log('Utilizando coneccion de mongo db')
      const db = connection.db(Config.mongoDB);
      resolve(db.collection(collection))
    } catch (error){
        reject(error);
    }

});