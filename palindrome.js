/* 특정 문자열을 앞으로 혹은 뒤로부터 읽어도 똑같은
문자인지 확인하는 알고리즘. 정규식을 사용하여 불필요한
특수문자와 공간을 제거 */

function isTextPalindrome(text) {
    if (text === undefined) {
      return false;
    }
    let left = 0;
    let right = text.length - 1;
    while (left < right) {
      if (text[left++] !== text[right--]) {
        return false;
      }
    }
    return true;
  }
  function isPhrasePalindrome(text) {
    let chars = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return isTextPalindrome(chars);
  }
  isPhrasePalindrome("Madam, I'm Adam");