import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  createdPost:any=[];

 onPostAdded(post:any){
   this.createdPost.push(post);
 }

}
