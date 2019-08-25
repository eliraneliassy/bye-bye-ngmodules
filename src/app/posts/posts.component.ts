import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.posts$ = this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;

}
