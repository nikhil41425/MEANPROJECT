const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors=require('cors');

const Post = require("./models/post.model");



const app = express();
app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect( "mongodb+srv://nikhil:nikhil123@ecommerce.ihbgn.mongodb.net/mean?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });





app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = app;


// const express=require('express');
// const cors=require('cors');
// const bodyParser=require('body-parser');
// const mongoose=require('mongoose');
// const Post=require('./models/post.model');

// mongoose.connect("mongodb+srv://nikhil:nikhil123@ecommerce.ihbgn.mongodb.net/mean?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true })
// .then(()=>{
//   console.log("connected to database");

// }).catch(()=>{
//   console.log("connection failed");
// });

// const app=express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(cors());

// app.post("/api/posts",(req,res,next)=>{
//   // const posts=req.body;
//   const posts=new Post(
//     {
//       title:req.body.title,
//       content:req.body.content
//     }
//   );
//   posts.save().then(updatedPost=>{
//     console.log(posts);
//     res.status(201).json({message:"posts added successfully"});
//     postId=updatedPost._id;
//   });

// });

// app.get("/api/posts", (req, res, next) => {
//   Post.find().then(documents => {
//     res.status(200).json({
//       message: "Posts fetched successfully!",
//       posts: documents
//     });
//   });
// });

// app.delete("/api/posts/:id", (req, res, next) => {
//   console.log(req.params._id);
//   Post.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "Post deleted!" });
//   });
// });

// module.exports=app;
