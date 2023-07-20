import { MathUtils } from "../../src";

describe('MathUtils.degToRad', () => {
  it('should convert degrees to radians', () => {
    let value = MathUtils.degToRad(180);
    expect(value).toBe(Math.PI);

    value = MathUtils.degToRad(360);
    expect(value).toBe(Math.PI * 2);
  });
});