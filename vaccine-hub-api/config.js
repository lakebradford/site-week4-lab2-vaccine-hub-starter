require('dotenv').config()
require("colors")

const PORT = process.env.port ? Number(process.env.PORT) : 3001

function getDatabaseUri(){
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS || "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || "5432"
    const dbName = process.env.DATABASE_NAME || "vaccine_hub"

    return process.env.DATABASE_URL ||  `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}


console.log("config info".green)
console.log("PORT: ".blue, PORT)



// EXPORT

module.exports = {
    PORT,
    getDatabaseUri,
    
}