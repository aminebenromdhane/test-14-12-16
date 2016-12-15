import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../service/question-service";
import {Question} from "../model/question";

@Component({
  selector: 'find-one-question',
  styleUrls: ['./find-one-question.css'],
  templateUrl: './find-one-question.html',
})
export class FindOneQuestion implements OnInit{
  question: Question;
  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.question = this.questionService.getStaicData();
  }
}
