import { MathUtils } from "../../src";

describe('MathUtils.clamp', () => {
  it('should clamp a value within a specified range', () => {
    let value = MathUtils.clamp(255, 0, 200);
    expect(value).toBe(200);

    value = MathUtils.clamp(175, 178, 200);
    expect(value).toBe(178);
  });
});