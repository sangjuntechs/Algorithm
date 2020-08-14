//xxxx년의 a월 b일은 무슨 요일인지 찾는 알고리즘

function solution(a, b) {
  let answer = "";
  let sum = 0;
  let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  function sumMonths(a) {
    if (a === 0) return undefined;
    return months.slice(0, a - 1).reduce(function (acc, cur) {
      return acc + cur;
    });
  }

  function findDay() {
    for (let i = 0; i < days.length; i++) {
      return days[sum % 7];
    }
  }

  let month = sumMonths(a);
  if (b === 0) return undefined;
  sum = month + b;
  answer = findDay();

  return answer;
}
