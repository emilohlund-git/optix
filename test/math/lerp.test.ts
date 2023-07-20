import { MathUtils } from "../../src";

describe('MathUtils.lerp', () => {
  it('should perform linear interpolation between two values', () => {
    let value = MathUtils.lerp(0, 100, .3);
    expect(value).toBe(30);

    value = MathUtils.lerp(30, 90, .5);
    expect(value).toBe(60);
  });
});