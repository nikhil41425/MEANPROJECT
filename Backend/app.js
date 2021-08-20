const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const Post = require("./models/post.model");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://nikhil:nikhil123@ecommerce.ihbgn.mongodb.net/mean?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });



app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id,
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents,
    });
  });
});

app.get("/api/posts/:id",(req,res,next)=>{
  Post.findById(req.params.id).then(post=>{
    if(post){

      res.status(200).json(post);

    }else{
      res.status(404).json({message:"Post Not Found"});
    }
  })
})

app.put("/api/posts/:id",(req,res,next)=>{

  const post=new Post({
    _id:req.body.id,
    title:req.body.title,
    content:req.body.content
  })
    Post.updateOne({_id:req.params.id},post).then((result)=>{
      console.log(result);
    res.status(200).json({message:"Updated Successfully"});
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});



module.exports = app;
