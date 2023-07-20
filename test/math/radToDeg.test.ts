import { MathUtils } from "../../src";

describe('MathUtils.radToDeg', () => {
  it('should convert radians to degrees', () => {
    let value = MathUtils.radToDeg(Math.PI);
    expect(value).toBe(180);

    value = MathUtils.radToDeg(Math.PI * 2);
    expect(value).toBe(360);
  });
});