import { ValidationUtils } from '../../src';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidEmail(): R;
      toBeInvalidEmail(): R;
    }
  }
}

expect.extend({
  toBeValidEmail(received: string) {
    const isValid = ValidationUtils.email(received);
    return {
      message: () => `Expected ${received} to be a valid email address, but it was invalid.`,
      pass: isValid,
    };
  },
  toBeInvalidEmail(received: string) {
    const isInvalid = !ValidationUtils.email(received);
    return {
      message: () => `Expected ${received} to be an invalid email address, but it was valid.`,
      pass: isInvalid,
    }
  },
});

describe('Email Validation', () => {
  // Valid email addresses
  const validEmails = [
    'user@example.com',
    'user.name@example.com',
    'user+test@example.com',
    'disposable.style.email.with+symbol@example.com',
    'other.email-with-hyphen@example.com',
    'user.name+tag+sorting@example.com',
    'example-indeed@strange-example.com',
    'example-indeed@strange-example.inininini',
    '1234567890123456789012345678901234567890123456789012345678901234+x@example.com',
    '用户@邮件.公司',
    'user@sub.domain.com',
    'user1234567890@example.com',
    'user@1example.com',
    'user1234567890123456789012345678901234567890@example.com',
    'user@example.1com',
    'user@123.com',
    'user123@example.com',
    'user-123@example.com',
    'user+test123@example.com',
    'user@example-domain.com',
    'user@sub.domain.co',
    'user@123456789012345678901234567890123456789012345678901234567890.example.com',
    'あいうえお@example.com',
  ];

  // Invalid email addresses
  const invalidEmails = [
    'user@example',
    'user@',
    'example.com',
    'user@com',
    'user@verylongtld',
    'user@example..com',
    'user@example.c',
    'user..name@example.com',
    'user@example!com',
    'user@ex@ample.com',
    'user@example.com ',
    '.user@example.com',
    'user.@example.com',
    'user@-example.com',
    'user@example-.com',
    'user@.com',
    'user@domain.',
    'user@sub.domain.',
    'user@example.c',
    'user@example.c1',
    '#@%^%#$@#$@#.com',
    '@example.com',
    'Joe Smith <email@example.com>',
    'this\ is"really"not\allowed@example.com',
    'Abc.example.com',
    'A@b@c@example.com',
    'a"b(c)d,e:f;g<h>i[j\k]l@example.com',
    'this\ still\"notallowed@example.com'
  ];

  test('Valid Email Addresses', () => {
    for (const email of validEmails) {
      expect(email).toBeValidEmail();
    }
  });

  test('Invalid Email Addresses', () => {
    for (const email of invalidEmails) {
      expect(email).toBeInvalidEmail();
    }
  });
});