import mysql from 'mysql2/promise';

const dbConnection=async()=>{
    try{
        const connection=await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "your_password",
            database: "your_database"
        })

        return connection;

    }
    catch(e){
        throw Error("Databaase failed to connected")
    }
}

export default dbConnection;