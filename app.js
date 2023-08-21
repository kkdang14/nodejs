const express = require('express')
const morgan = requre('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/trang', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})