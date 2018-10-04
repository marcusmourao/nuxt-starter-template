// @see http://github.com/manishsaraan/email-validator (Released in Public Domain)
const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const isValidEmail = function isValidEmail(email) {
  if (!email) {
    return false;
  }

  if (email.length > 254) {
    return false;
  }

  if (!tester.test(email)) {
    return false;
  }

  // Further checking of some things regex can't handle
  const parts = email.split('@');

  if (parts[0].length > 64) {
    return false;
  }

  const domainParts = parts[1].split('.');

  return !domainParts.some(part => part.length > 63);
};


export default function sanitizeEmail(value) {
  const sanitized = String(value || '').trim();

  if (isValidEmail(sanitized)) {
    return sanitized;
  }

  return null;
}
