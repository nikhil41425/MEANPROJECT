import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from '../post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

   constructor(private http:HttpClient){}

  getPost() {

     this.http.get<{message:string,posts:Post[]}>('http://localhost:3000/api/posts').subscribe((postData)=>{
          this.posts=postData.posts;
          this.postUpdated.next([...this.posts]);
     })

    // return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    let post: Post = {
      id:'',
      title: title,
      content: content,
    };
    this.http.post<{message:string}>('http://localhost:3000/api/posts',post).subscribe((postedData)=>{
              console.log(postedData.message);
              this.posts.push(post);
              this.postUpdated.next([...this.posts]);

    })

  }
}
