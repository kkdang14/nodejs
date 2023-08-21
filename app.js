const express = require('express')
const morgan = requre('morgan')
const app = express()
const port = 3000

app.get('/trang', (req, res) => {
    var a = 1;
    var b = 2;
    var c= a + b;
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})