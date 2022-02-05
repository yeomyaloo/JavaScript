'use strick';

// 자바스크립트는 동기적인 언어임 -> 동기적인 언어인이유는 호이스팅 덕분
// 1,3,2가 나오는 이유는 콜백함수가 비동기적이기 때문
console.log('1'); //동기
setTimeout(()=> console.log('2'),1000); //비동기
console.log('3'); //동기


//모든 callback이 비동기적인 것은 아니다.
//동기 callback
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello')); //동기


//비동기 callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}

printWithDelay(()=>console.log('async callback'),2000); //비동기

/* 
1. 함수를 callback 함수로 인자로 다른 함수에 전달할 수도 있고
2. 변수에 할당할 수 있다.

언어마다 callback 지원은 다 다름
*/
