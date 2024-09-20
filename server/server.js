import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;



// middleware
app.use(cors());

// default request
app.get('/',(req,res)=>{
    res.status(200).send("Working on API version 1.0.0")
})
app.get('/user',(req,res)=>{
    res.status(200).json({
        "Name":"Neelabh sharma",
        "email":"neelabhsharma2002@gmail.com",
        "paaword":"1234",
        "role":"user",
        "phoneNo":7428460549,
        "BloodGroup":"B+",
        "dob":"20jan2002",
        "healthScore":"94",
        "height": 186,
        "weight":95,
    })
});


try{
    app.listen(PORT,() =>{
        console.log(`App is running on http://localhost:${PORT}`);
    })
}catch(err){
    console.log(err);
}