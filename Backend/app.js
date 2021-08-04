const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.post("/api/posts",(req,res,next)=>{
  const posts=req.body;
  console.log(posts);
  res.status(201).json({
    message:"posts added successfully"
  })
})

app.use("/api/posts",(req,res,next)=>{
   const posts=[
     {
       id:'jfvkkfuhe',
       title:'First',
       content:"this is content 1"
     },
     {
       id:'jfvkkfuhe',
       title:'Second',
       content:"this is content 2"
     }
   ]
   res.status(200).json({
     message:"Posts fetched successfully",
     posts:posts
   })
});



module.exports=app;
