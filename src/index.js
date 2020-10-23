module.exports = function reverse (n) {
  if (n < 0){
      n *= -1;
  }
  let k = 0;
  let n_copy = n;
  while (n_copy){
      n_copy = Math.floor(n_copy / 10);
      k += 1;
  }
  let answer = 0;
  for (let i = k - 1; i >= 0; --i){
      answer += (n % 10) * Math.pow(10, i);
      n = Math.floor(n / 10);
  }
  return answer;
}
