import { ThreeDigitNumberPipe } from './three-digit-number.pipe';

describe('ThreeDigitNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ThreeDigitNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
