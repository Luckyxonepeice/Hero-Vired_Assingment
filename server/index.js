const express = require('express')
const app = express()
const PORT = process.env.PORT  ? process.env.PORT : 5000;
const enroll = require('./routes/program.js')

app.use(express.json())

app.use('/program', enroll);

app.listen(PORT, ()=>{
    console.log(`Server is Running in ${PORT}`)
})
