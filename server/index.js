const express = require('express')
const app = express()
const PORT = process.env.PORT  ? process.env.PORT : 5000;
const enroll = require('./routes/program.js')
const draftprogram= require('./routes/draftporgram.js')

app.use(express.json())

app.use('/program', enroll);
app.use('/draftprogram',draftprogram);


app.listen(PORT, ()=>{
    console.log(`Server is Running in ${PORT}`)
})
