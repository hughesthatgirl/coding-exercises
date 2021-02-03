function Algo() {}

Algo.prototype.reverse = function(str) {
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
  
};

Algo.prototype.capitalize = function(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  words.join(' ');

  return words;
};

module.exports = Algo;
