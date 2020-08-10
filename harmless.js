/*Harmless Ransom Note
두 개의 파라미터로 전달되는 문자열 중 중복되는 문자열의
유무를 파악해서 true, false로 반환한다. forEach() 메소드를
사용하여 배열 요소마다 한 번씩 제공한 함수를 실행한다. */

function harmlessRansom(noteText, magazineText) {
    let noteArr = noteText.split('');
    let magazineArr = magazineText.split('');
    let magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word] ++;
    })

    let noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj [word]) {
            magazineObj[word] --;
            if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
});
    return noteIsPossible;
}

harmlessRansom('','');
