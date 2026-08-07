import mysql from 'mysql2/promise';
import env from './env.config.js';

const dbConnection=async()=>{
    try{
        const connection=await mysql.createConnection({
            host: env.mysql.host,
            user: env.mysql.user,
            port: env.mysql.mysql_port,
            password: env.mysql.password,
            database: env.mysql.database
        })
        return connection;

    }
    catch(e){
        console.log(e)
        throw Error("Database failed to connected")
    }
}

export default dbConnection;