const express=require("express");
const cors=require("cors");
const path=require("path");
const axios=require("axios");
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"dist")));
app.get("/message",(req,res)=>{
res.send("Twitter is now X");
});
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"dist","index.html"));
});

app.post("/sendData",async (req,res)=>{
const {data}=await axios.get(req.body.url);
console.log(data.articles[1].title);
res.send(data.articles[1].title);
});

app.listen(800,()=>{
    console.log("Server stared at port 800");
});