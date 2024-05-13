const express = require('express')
const app = express()
const port = 3000
const articleRoutes = require('./Routes/article')
const authorRoutes = require('./Routes/author')
   
    app.use('/article', articleRoutes)
    app.use('/author', authorRoutes)

    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})