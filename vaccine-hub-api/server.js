const express = require("express")
const cors = require('cors')
const morgan = require("morgan")
const { PORT } = require('./config')
const authRoutes = require("./routes/auth")

const app = express()

app.use(cors())
app.use(express.json())

app.use(morgan('tiny'))
app.use("/auth",authRoutes)

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING AT http://localhost:'+ PORT)

})