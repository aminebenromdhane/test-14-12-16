import {Component, OnInit, Input} from '@angular/core';
import {Comment} from "../model/comment";

@Component({
  selector: 'one-comment',
  styleUrls: ['./one-comment.css'],
  templateUrl: './one-comment.html'
})
export class OneComment implements OnInit{

  @Input('comment') comment: Comment;
  content: string;
  constructor() {}

  ngOnInit() {
  }

  fillCommentContent(){
    this.comment.content = this.content;
  }
}
