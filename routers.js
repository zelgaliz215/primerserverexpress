const express = require('express');
const router = express.Router(); // es un objeto

router.get('/', (req,res,)=>{
    //res.end('hello world');
    res.render('index.ejs');
});

router.get('/login', (req,res) =>{
    res.end('Aqui va el login');
})



//exporto el objeto
module.exports = router;