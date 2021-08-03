import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post-service/post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  //@Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostService) {}

  onAddData(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // const posts:Post=
    //   {
    //   title:form.value.title,
    //   content:form.value.content
    // }

    // this.postCreated.emit(posts);
    this.postService.addPost(form.value.title, form.value.content);
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
