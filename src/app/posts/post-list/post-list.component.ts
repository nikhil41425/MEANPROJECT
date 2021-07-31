import { Component, Input } from "@angular/core";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent{

  // posts=[
  //   {title:"first post",content:"this is 1st post"},
  //   {title:"second post",content:"this is 2nd post"},
  //   {title:"third post",content:"this is 3rd post"}
  // ]



     @Input() posts:any=[];

}
