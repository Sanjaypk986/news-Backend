const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const articleRoutes = require('./Routes/article')
const authorRoutes = require('./Routes/author')
const mongoose = require('mongoose');
require('dotenv').config()

    app.use(cors())
    app.use(express.json())
    app.use('/articles', articleRoutes)
    app.use('/authors', authorRoutes)

    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=>console.log("Connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.CONNECTION_STRING);

}
