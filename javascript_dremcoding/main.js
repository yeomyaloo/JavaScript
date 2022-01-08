'use strict'; // 바닐라자바스크립트로만 꾸밀 때 선언해줘 !! 

//전역변수로 어디서든 사용 OK!!
let globalName = 'global name'; 


//지역변수로 {} 밖에서 접근 NO!!
{
    let name = 'yaloo';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);
console.log(globalName);


const dayInWeek = 7;
const maxNumber = 5;

let a = 12; //integer
let b = 1.5; //decimal number


// 특별한 숫자 데이터 타입
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// string type
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
const helloBob = `h1 ${helloBob}!`; //template literals (String)

//null, undefined
let nothing = null;
// 👉이 경우엔 값이 없는 상태라는 것을 정의해 놓은 것
let x = undefined;
// 👉이 경우엔 변수를 선언했지만 값이 정의되지 않은 상태

//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); // -> string이 동일하지만 symbol1과 symbol2는 엄연히 다름 

//Dynamic typing
let text = 'hello'; //hello라는 String 할당