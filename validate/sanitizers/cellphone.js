export default function sanitizeCellphone(value) {
  const sanitized = String(value || '').replace(/\D/g, '').replace(/^0+/, '');

  // @see https://pt.wikipedia.org/wiki/Discagem_direta_a_dist%C3%A2ncia
  if (sanitized.length === 11 && /^([14689][1-9]|2[12478]|3[1-578]|5[1345]|7[134579])9\d{8}/.test(sanitized)) {
    return sanitized;
  }

  return null;
}
