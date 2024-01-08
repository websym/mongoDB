const express=require('express')
const mongoose=require('mongoose')

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


const DB=`mongodb+srv://websym:YAr9rdh7dLrxfvw1@fullstack.gspervu.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(DB).then(()=>{
    console.log('connection successful');})
    .catch((err)=>console.log('no connection'));

    const noteSchema=new mongoose.Schema({
        content:String,
        important:Boolean,
    
    })
    
    const Nepa=mongoose.model('Nepa',noteSchema)
    
    const nepa=new Nepa({
        content:'HTML is Easy',
        important:true,
    })
    
    nepa.save().then(result=>{
        console.log('note Saved')
        mongoose.connection.close()
    })
    
    Nepa.find({}).then(result=>{
        result.forEach(nepa=>{
            console.log(nepa)
        })
        mongoose.connection.close()
    })

