import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {

  transform(value: number, prefix = ''): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const result = `${(minutes + '').padStart(2, '0')}:${(seconds + '').padStart(2, '0')}`;
    return prefix + result;
  }

}
