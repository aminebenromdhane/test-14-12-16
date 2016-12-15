import {Pipe} from "@angular/core";
@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTime{
  times = {
    hour: 3600,
    minute: 60,
    second: 1
  };

  transform(seconds){
    let time_string: string = '';
    for(var key in this.times){
      if(Math.floor(seconds / this.times[key]) > 0){
        if(Math.floor(seconds / this.times[key]) < 10){
          time_string += '0';
        }
        time_string += Math.floor(seconds / this.times[key]).toString();
        seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
      }else{
        time_string += '00'
      }
      if(key != 'second'){
        time_string += ':';
      }
    }
    return time_string;
  }
}
