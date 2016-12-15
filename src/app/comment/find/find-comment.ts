import {Component, OnInit, Input} from '@angular/core';
import {Question} from "../../question/model/question";

@Component({
  selector: 'find-comment',
  styleUrls: ['./find-comment.css'],
  templateUrl: './find-comment.html',
})
export class FindComment implements OnInit {
  @Input('question') question: Question;

  ngOnInit() {
  }
}
