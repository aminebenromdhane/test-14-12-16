import { Injectable } from '@angular/core';
import { Comment } from "../model/comment";

@Injectable()
export class CommentService {

  constructor() {

  }
  getStaicData():Comment[] {
    return [new Comment({
        isVideo: false,
        rate: 6,
        content: 'This a sample comment.',
        user: {
          picture: 'http://weneedfun.com/wp-content/uploads/2015/09/Cute-baby-boy-pics-for-facebook-profile-10.jpg'
        },
        verdict: null,
        pointNumber: 1
      }),
      new Comment({
        isVideo: true,
        rate: 5,
        content: 'This a sample comment for video',
        user: {
          picture: 'http://2.bp.blogspot.com/-YnlkCdnRE1I/VD7eVYfBSlI/AAAAAAAAALk/wZjNwUte9yY/s1600/cute%2Bgirl%2BProfile%2BPicture%2BFor%2BFacebook%2B2.jpg'
        },
        time: 1,
        verdict: null,
        pointNumber: 1
      }),
      new Comment({
        isVideo: true,
        rate: 5,
        content: 'This a sample comment for video',
        user: {
          picture: 'http://blog.dictionary.com/wp-content/uploads/2012/05/baby-big.jpg'
        },
        time: 2,
        verdict: null,
        pointNumber: 2
      })];
  };
}
