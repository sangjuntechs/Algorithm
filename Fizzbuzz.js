//fizzbuzz algorithm 특정 조건에 부합하는 결과 구분

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('fizzbuzz'); //3과 5의 배수 'fizzbuzz출력'
        else if (i % 3 === 0) console.log('Fizz'); //3의 배수 'Fizz' 출력
        else if (i % 5 === 0) console.log('Buzz'); //5의 배수 'Buzz' 출력
        else console.log(i)
    }
}

fizzBuzz (30);