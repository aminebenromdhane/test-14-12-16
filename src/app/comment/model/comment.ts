export class Comment {
  isVideo: boolean;
  rate: number;
  content: string;
  user: any;
  verdict: number;
  time: number;
  pointNumber: number;
  highlight: boolean;

  constructor(comment: any) {
    this.isVideo = comment.isVideo;
    this.rate = comment.rate;
    this.content = comment.content;
    this.user = comment.user;
    this.verdict = comment.verdict;
    this.time = comment.time;
    this.pointNumber = comment.pointNumber;
    this.highlight = false;
  }

}
