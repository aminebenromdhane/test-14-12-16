import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FindComment} from "./comment/find/find-comment";
import {OneQuestion} from "./question/one/one-question";
import {CommentService} from "./comment/service/comment-service";
import {QuestionService} from "./question/service/question-service";
import {OneComment} from "./comment/one/one-comment";
import {FindOneQuestion} from "./question/find-one/find-one-question";
import {SecondsToTime} from "./comment/components/second-to-time/second-to-time";

@NgModule({
  declarations: [
    AppComponent,
    OneQuestion,
    OneComment,
    FindOneQuestion,
    FindComment,
    SecondsToTime
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CommentService,
    QuestionService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
