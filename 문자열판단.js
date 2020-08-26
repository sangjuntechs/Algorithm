// 함수 solution s에 대하여 s가 숫자가 아니거나 길이가 4혹은 6일때 이만 true를 반환

function solution(s) {
    let answer = false;
    if (!isNaN(s) && s.indexOf('e') === -1) {
        if (s.split('').length === 4 || s.split('').length === 6) return true;
    }
    return answer;
}