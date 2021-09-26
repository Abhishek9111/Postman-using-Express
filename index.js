const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express();


app.use(cors())


app.use(express.json())

app.use('/api/members',require('./routes/api/members'))//localhost:3000/members


app.use(express.static(path.join(__dirname,'public')))

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))