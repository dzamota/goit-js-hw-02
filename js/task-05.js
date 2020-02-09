'use strict';

const checkForSpam = function(message) {
  const checkString = message.toLowerCase();

  if (checkString.includes('spam') || checkString.includes('sale')) {
    return true;
  }
  return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
