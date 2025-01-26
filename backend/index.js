console.log("hello backend ji ")
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
res.send('Hello World! About')
})

app.get('/login', (req,res)=>{
    res.send('<h2>Login Page</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});