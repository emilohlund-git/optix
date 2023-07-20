import { StringUtils } from '../../src';

describe('StringUtils.rgbaToHex', () => {
  it('should convert a rgba value to hex', () => {
    const rgb = StringUtils.rgbaToHex('rgba(255, 0, 0, 1)');
    expect(rgb).toBe('#FF0000FF');
  });

  it('should convert a random rgba value to hex', () => {
    const rgb = StringUtils.rgbaToHex('rgba(54, 1, 63, 1)');
    expect(rgb).toBe('#36013FFF');
  });

  it('should convert a rgba value with alpha to hex', () => {
    const rgba = StringUtils.rgbaToHex('rgba(255, 0, 0, 0.50)');
    expect(rgba).toBe('#FF000080');
  });

  it('should return original value is invalid rgba string', () => {
    const rgba = StringUtils.rgbaToHex('rgba(255, 255, 255)');
    expect(rgba).toBe('rgba(255, 255, 255)');
  });
});