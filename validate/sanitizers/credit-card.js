const CreditCardSanitizer = {
  isCreditCardNumberValid(number) {
    return number.toString().replace(/\D/g, '').length === 16;
  },
  isCreditCardCCVValid(ccv) {
    return ccv.toString().replace(/\D/g, '').length >= 3;
  },
  isCreditCardDueDateValid(expirationDate) {
    const dueDate = expirationDate.toString().replace(/\D/g, '');
    const month = dueDate.slice(0, 2);
    const year = dueDate.slice(2);
    let isMonthValid = true;
    let isYearValid = true;
    if (parseInt(month, 10) === 0 || parseInt(month, 10) > 12) {
      isMonthValid = false;
    }
    if (year.length !== 2) {
      isYearValid = false;
    }
    return dueDate !== '' && isMonthValid && isYearValid;
  },
};

export default CreditCardSanitizer;
