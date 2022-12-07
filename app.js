const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const adminRoutes=require('./routes/admin');

app.use(adminRoutes);


app.use(bodyparser.urlencoded())
app.use((req,res,next)=>{
res.status(404).send('<h1>404 Page Not Found</h1>')
});



app.listen(8080)

 
