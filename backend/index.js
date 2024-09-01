const express = require("express");
const z = require("zod")
const app = express();
const {todomodel} = require("./connect");
var cors = require('cors')

app.use(cors()) 

app.use(express.json());

function validate(req,res,next){
    const schema = z.object({
        title:z.string(),
        description:z.string(),
    });
    const response = schema.safeParse(req.body);
    if(response.success)next();
    else return res.status(404).json({"msg":"incorrect body"});
}

app.post("/todo",validate,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    try{
        await todomodel.create({
            title,
            description,
            done:false
        });
        res.status(200).json({"msg":"todo added successfully"});
        return;
    }
    catch(err){
        return res.status(404).json({"error":err});
    }
})

app.get("/todos",async (req,res)=>{
    try {
        const data = await todomodel.find({},{
            __v:0
        });
        res.status(200).json({"data":data});
        return;
    }
    catch(err){
        return res.status(404).json({"error":err});
    }
})

app.put("/completed",validate,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    try{
        const data = await todomodel.findOneAndUpdate({
            title,
            description,
        },{
            done:true
        });
        res.status(200).json({"msg":"todo completed successfully"});
        return;
    }
    catch(err){
        return res.status(404).json({"error":err});
    }
})

app.delete("/remove",validate,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    try{
        const data = await todomodel.deleteMany({
            title,
            description,
        });
        res.status(200).json({"msg":"todo removed successfully"});
        return;
    }
    catch(err){
        return res.status(404).json({"error":err});
    }
})

app.use((err,req,res,next)=>{
    console.log("global catch")
})

app.listen(3000,()=>{console.log("server running successfully")})