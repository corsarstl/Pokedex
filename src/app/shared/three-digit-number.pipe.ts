import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDigitNumber'
})
export class ThreeDigitNumberPipe implements PipeTransform {

  transform(value: number): string {
    let i = (String(value).length);
    let threeDigitNumber = '';

    switch (i) {
      case 1:
        threeDigitNumber = `#00${value}`;
        break;
      case 2:
        threeDigitNumber = `#0${value}`;
        break;
      case 3:
        threeDigitNumber = `#${value}`;
        break;
    }

    return threeDigitNumber;
  }

}
