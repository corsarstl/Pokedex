import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDigitNumber'
})
export class ThreeDigitNumberPipe implements PipeTransform {

  transform(value: number): string {
    let arr = [];
    arr.push(value);

    if (arr.length === 1) {
      arr.unshift(0);
      // arr.unshift(0);
    } /*else if (arr.length < 3) {
        arr.unshift(0);
    }
*/

    // switch (arr.length) {
    //   case 2:
    //     arr.unshift(0);
    //     break;
    //   case 1:
    //     arr.unshift(0);
    //     arr.unshift(0);
    //     break;
    //   case 3:
    //     break;
    // }

    let threeDigit = arr.join('');
    let threeDigitNumber = `#${threeDigit}`;

    return threeDigitNumber;
  }

}
