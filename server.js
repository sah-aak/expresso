const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(cors());
app.use(bodyParser.json());

const PORT= process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log('server running !!!');
});

