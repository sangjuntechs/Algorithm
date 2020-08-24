/*가운데 글자 가져오기
단어 s의 가운데 글자를 반환합니다. 단어의 길이가 짝수라면
가운데 두 글자를 반환*/

function solution(s) {
    let answer = '';
    let string = s;
    let stringLength = string.length;
    let stringHalf = Math.floor(stringLength/2);
    let stringStart = '';
    let stringEnd = stringHalf + 1;
    
    if (stringLength%2 === 0) {
        stringStart = stringHalf - 1;
        answer = string.substring(stringStart, stringEnd);
    } else if (stringLength%2 === 1) {
        stringStart = stringHalf;
        answer = string.substring(stringStart, stringEnd);
    }
    
    return answer;
}