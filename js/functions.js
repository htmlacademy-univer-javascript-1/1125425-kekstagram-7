/* eslint-disable curly */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable semi */

const isStringShorterOrEqual = function(string, maxLength) {
  return string.length <= maxLength;
};

// Строка короче 20 символов
console.log(isStringShorterOrEqual('проверяемая строка', 20)); // Выведет: true

// Длина строки равна 18 символов
console.log(isStringShorterOrEqual('проверяемая строка', 18)); // Выведет: true

// Строка длиннее 10 символов
console.log(isStringShorterOrEqual('проверяемая строка', 10)); // Выведет: false
const isPalindrome = function(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = string.length-1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
}

// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекс'));  // false
// Это палиндром
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

const FindNumbersInString = function(string) {
  string = String(string).replaceAll(' ', '');
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i])))
      result += string[i];
  }
  return result === '' ? NaN : Number(result);
}

console.log(FindNumbersInString('2023 год'));            // 2023
console.log(FindNumbersInString('ECMAScript 2022'));     // 2022
console.log(FindNumbersInString('1 кефир, 0.5 батона')); // 105
console.log(FindNumbersInString('агент 007'));           // 7
console.log(FindNumbersInString('а я томат'));           // NaN

console.log(FindNumbersInString(2023)); // 2023
console.log(FindNumbersInString(-1));   // 1
console.log(FindNumbersInString(1.5));  // 15

