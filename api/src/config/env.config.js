import dotenv from 'dotenv'
dotenv.config()

// MYSQL_HOST=localhost
// MYSQL_PORT=3306
// MYSQL_USER=online_wallet
// MYSQL_PASSWORD=online_wallet
// MYSQL_DATABASE=wallet_management

const env={
    port: process.env.port,
    mysql: {
        host: process.env.MYSQL_HOST,
        mysql_port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }


}

export default env;