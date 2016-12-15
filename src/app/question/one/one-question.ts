import {Component, Input, ViewChild, OnInit} from '@angular/core';
import {Question} from "../model/question";
@Component({
  selector: 'one-question',
  styleUrls: ['./one-question.css'],
  templateUrl: './one-question.html',
})
export class OneQuestion implements OnInit{
  @Input('question') question: Question;
  @ViewChild('videoplayer') videoPlayer;
  videoDuration: number;
  ngOnInit() {
    let videoElement = this.videoPlayer.nativeElement;
    let vm = this;
    let commentInCreation = false;
    videoElement.ondurationchange = function() {
      vm.videoDuration = videoElement.duration;
      vm.question.setVideoComponents(vm.videoDuration);
      vm.question.checkVideoComponents();
    };
    videoElement.addEventListener("timeupdate", () => {
      if(commentInCreation){
        return;
      }
      commentInCreation = true;
      setTimeout(() => {
        vm.question.createVideoComment(Math.floor(videoElement.currentTime));
        commentInCreation = false;
      }, 100);
    });
  }

  addComment(pointNumber) {
    this.question.createHTMLComment(pointNumber);
  }
}
