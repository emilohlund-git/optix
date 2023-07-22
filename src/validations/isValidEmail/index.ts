/**
 * @namespace ValidationUtils
 * 
 * Validates an email address.
 * @param email - The email address to validate.
 * @returns True if the email address is valid, false otherwise.
 * 
 * @example
 * const email = 'user@example.com';
 * const isValid = isValidEmail(email);
 *
 * console.log(isValid); // Output: true
 */
export function isValidEmail(email: string): boolean {
  const [localPart, domainPart] = email.split('@');

  if (!localPart || !domainPart || localPart.startsWith('.') || localPart.endsWith('.')) return false;

  const domainParts = domainPart.split('.');

  if (
    domainParts.length < 2 ||
    domainParts.some((part) => part === '' || part.startsWith('-') || part.endsWith('-'))
  ) {
    return false;
  }

  // Allow letters (both uppercase and lowercase), digits, hyphens, and non-ASCII characters
  const validDomainPartRegex = /^[a-zA-Z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-.]+$/;

  // Ensure no consecutive dots (..) in the local part
  if (localPart.includes('..') || /["]/.test(localPart)) {
    return false;
  }

  if (domainParts.some((part) => !validDomainPartRegex.test(part) || part.length > 63)) {
    return false;
  }

  // Check the length of the top-level domain (TLD)
  const tld = domainParts[domainParts.length - 1];
  if (/\d/.test(tld)) {
    // Check if the TLD contains less than two characters
    if ((tld.match(/[a-zA-Z]/g) || []).length < 2) {
      return false;
    }
  }

  if (tld.length < 2) {
    return false;
  }

  return true;
}
