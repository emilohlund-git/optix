import { ValidationUtils } from '../../src';

describe('ValidationUtils.password', () => {
  test('Valid password!', () => {
    // The password is valid
    const password = 'SuperSecureForTheWin124@!';
    expect(ValidationUtils.password(password)).toEqual([]);
  });

  test('Repeated characters', () => {
    // The password has repeated characters (sss)
    const password = 'SecurePasss124!';
    expect(ValidationUtils.password(password)).toEqual([
      "Password must not contain repeated characters.",
    ]);
  });

  test('Password Too Long', () => {
    // The password is too short (less than the minLength)
    const password = 'V3ryS3cpLdokqwdopCkiwoqe12Csa8j9d3ur3P@ssw0rdL0ng3rTh@n1019nD3tS701T3jiF3adCn32moIuRChr@ct3rsWi7h0utR3p3@ted0rS3qu3ntialP@rts!';
    expect(ValidationUtils.password(password)).toEqual([
      "Password must not exceed 100 characters."
    ]);
  });

  test('Password Too Short', () => {
    // The password is too short (less than the minLength)
    const password = 'Ace124!';
    expect(ValidationUtils.password(password)).toEqual([
      "Password must be at least 8 characters."
    ]);
  });

  test('Password contains sequential characters', () => {
    // The password is too long (exceeds the maxLength)
    const password = 'Abcdefghijklmnopqrstuvwxyz1234567890!';
    expect(ValidationUtils.password(password)).toEqual([
      "Password must not contain sequential characters.",
    ]);
  });

  test('Missing Uppercase Letter', () => {
    // The password does not contain an uppercase letter
    const password = 'securepazs124!';
    expect(ValidationUtils.password(password)).toEqual(['Password must contain at least one uppercase letter.']);
  });

  test('Missing Lowercase Letter', () => {
    // The password does not contain a lowercase letter
    const password = 'SECUREPASZ124!';
    expect(ValidationUtils.password(password)).toEqual(['Password must contain at least one lowercase letter.']);
  });

  test('Missing Number', () => {
    // The password does not contain a number
    const password = 'SecurePazs!';
    expect(ValidationUtils.password(password)).toEqual(['Password must contain at least one number.']);
  });

  test('Missing Special Character', () => {
    // The password does not contain a special character
    const password = 'SecurePazs124';
    expect(ValidationUtils.password(password)).toEqual(['Password must contain at least one special character.']);
  });

  test('Disallow Repeated Characters', () => {
    // The password contains repeated characters
    const password = 'Passwoooord124!';
    expect(ValidationUtils.password(password)).toEqual([
      'Password must not contain repeated characters.'
    ]);
  });

  test('Disallow Sequential Characters', () => {
    // The password contains sequential characters
    const password = 'Abcdefgh123!';
    expect(ValidationUtils.password(password)).toEqual([
      "Password must not contain sequential characters."
    ]);
  });
});
