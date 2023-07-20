import { StringUtils } from '../../src';

describe('StringUtils.hexToRgba', () => {
  it('should convert a hex value to rgb', () => {
    const rgb = StringUtils.hexToRgba('#FF0000');
    expect(rgb).toBe('rgba(255, 0, 0, 1)');
  });

  it('should convert a random hex value to rgb', () => {
    const rgb = StringUtils.hexToRgba('#36013F');
    expect(rgb).toBe('rgba(54, 1, 63, 1)');
  });

  it('should convert a hex value with alpha to rgba', () => {
    const rgba = StringUtils.hexToRgba('#ff000080');
    expect(rgba).toBe('rgba(255, 0, 0, 0.50)');
  });
});