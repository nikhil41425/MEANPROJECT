import { Component, EventEmitter ,Output } from "@angular/core";


@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{

  enteredTitle="";
  enteredContent="";

  @Output() postCreated = new EventEmitter();

  onAddData(){

    const posts=
      {
      title:this.enteredTitle,
      content:this.enteredContent
    }

    this.postCreated.emit(posts);

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
