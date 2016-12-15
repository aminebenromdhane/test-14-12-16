import {Comment} from "../../comment/model/comment";
export class Question {
  htmlContent: any[];
  videoUrl: string;
  comments: Comment[];
  videoComponents: any[];

  constructor(videoUrl: string, htmlContent: string[], comments: Comment[]) {
    this.videoUrl = videoUrl;
    this.htmlContent = [];
    for(let content of  htmlContent){
      this.htmlContent.push({content: content, highlight: false});
    }
    this.comments = comments;
    this.videoComponents = [];
  }

  positionIsInHTMLComments(pointNumber){
    for(let comment of this.comments){
      if(!comment.isVideo && pointNumber === comment.pointNumber){
        return true;
      }
    }
    return false;
  }

  createHTMLComment(pointNumber) {
    this.comments.push(new Comment({
      isVideo: false,
      user: {
        picture: 'http://weneedfun.com/wp-content/uploads/2015/09/Cute-baby-boy-pics-for-facebook-profile-10.jpg'
      },
      content: '',
      rate: 1,
      pointNumber: pointNumber
    }));
  }

  createVideoComment(pointNumber) {
    this.comments.push(new Comment({
      isVideo: true,
      user: {
        picture: 'http://weneedfun.com/wp-content/uploads/2015/09/Cute-baby-boy-pics-for-facebook-profile-10.jpg'
      },
      content: '',
      rate: 1,
      pointNumber: pointNumber,
      time: pointNumber
    }));
    this.checkVideoComponents();
  }

  setVideoComponents(duration) {
    for (let i = 0 ; i <= Math.floor(duration); i++){
      this.videoComponents.push({time: i, index: i, highlight: false, visible: false});
    }
  }

  checkVideoComponents(){
    for (let comment of this.comments){
      if(comment.isVideo){
        for(let component of this.videoComponents){
          if(comment.pointNumber === component.index){
            component.visible = true;
            break;
          }
        }
      }
    }
  }

  selectComponent(comment: Comment) {
    if(comment.isVideo){
      for (let component of this.videoComponents){
        if(component.index === comment.pointNumber){
          component.highlight = !component.highlight;
          break;
        }
      }
    }else{
      this.htmlContent[comment.pointNumber - 1].highlight = !this.htmlContent[comment.pointNumber - 1].highlight;
    }
  }

  selectComments(pointNumber, isVideo) {
    for (let comment of this.comments) {
      if (comment.isVideo === isVideo && comment.pointNumber === pointNumber){
        comment.highlight = !comment.highlight;
      }
    }
  }

}
