const express = require('express')
const app = express()
app.set('view engine','ejs')

app.use(express.static("style"))

app.get("/",(req,res)=>{
    res.render(__dirname + '/view/weather.ejs');
})

const port = 4400
app.listen(process.env.PORT || port,()=>
{
    console.log("Server is running")
})