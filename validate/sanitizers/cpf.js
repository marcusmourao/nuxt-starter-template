// @see http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
const isValidCPF = function isValidCPF(cpf) {
  // same digit sequence, eg: 00000000000, 11111111111, ...
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;

  for (let index = 1; index <= 9; index += 1) {
    sum += Number(cpf.substring(index - 1, index)) * (11 - index);
  }

  let remainder = (sum * 10) % 11;

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0;
  }

  if (remainder !== Number(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let index = 1; index <= 10; index += 1) {
    sum += Number(cpf.substring(index - 1, index)) * (12 - index);
  }

  remainder = (sum * 10) % 11;

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0;
  }

  return remainder === Number(cpf.substring(10, 11));
};

export default function sanitizeCPF(value) {
  const sanitized = String(value || '').replace(/\D/g, '');

  if (isValidCPF(sanitized)) {
    return sanitized;
  }

  return null;
}
