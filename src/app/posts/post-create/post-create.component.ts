import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../post-service/post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  private mode='create';
  private postId:any;
  isLoading:boolean=false;

   post:any;
  //@Output() postCreated = new EventEmitter<Post>();


  //@Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostService,public route:ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
        if(paramMap.has('postId')){
           this.mode='edit';
           this.postId=paramMap.get('postId');
           this.isLoading=true;
          //  this.post=this.postService.getPost(this.postId);
           this.postService.getPost(this.postId).subscribe(postData=>{
             this.isLoading=false;
             this.post={id:postData._id,title:postData.title,content:postData.content};
           });


        }else{
             this.mode='create'
             this.postId=null
        }

    })
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading=true;
    if(this.mode==='create'){
      this.postService.addPost(form.value.title, form.value.content);


    }else{
      this.postService.updatePost(this.postId,form.value.title, form.value.content);
    }

    // const posts:Post=
    //   {
    //   title:form.value.title,
    //   content:form.value.content
    // }

    // this.postCreated.emit(posts);

    form.resetForm();
  }

  // myData="";

  // newPost="Enter Content";

  // onAddData(name: any){
  //   this.newPost=name;
  //   console.log(name);
  // }

  // onAddData(){
  //   this.newPost=this.myData;
  //   console.log(this.newPost);
  // }
}
