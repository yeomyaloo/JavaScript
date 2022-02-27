'use strict';

// Promise = JS 안에 내장된 Object 비동기적인 것을 수행할 때 콜백함수 대신 사용 가능
//stateL pending -> fulfilled state(성공) or rejected state(실패)
//producer vs Consumer

//1. Producer
//새로운 Promise가 만들어질 때는 우리가 만든 executor라는 함수가 실행된다
//불필요한 실행이 있을 수 있기에 이를 유의해야 한다.

const promise = new Promise((resolve, reject) => {
    /*파일 크기가 크거나 네트워크를 받아오는 등의 활동은
      매우 무거운 활동으로 이것을 동기적으로 진행하면 파일을
      받아오는 도중에 다음 줄에 있는 코드가 실행될 수 있기에
      시간이 걸리는 일들은 Promise를 만들어 비동기적으로 
      만드는 것이 좋다.
    */
   console.log('doing something...');
   setTimeout(()=>{
       //resolve('yaloo');
       reject(new Error('no network'));
   },2000);
});

//2. Promise 사용하기 Consumers: then,catch, finally
promise
    .then((value)=> {
        console.log(value);
    })  
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

//3. Promise 연결하기
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>resolve(num-1),1000);
    });
})
.then(num=> console.log(num));


//4. 에러 처리
const getHen = () => 
    new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('🐓'),1000)
    });

    const getEgg = hen =>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`${hen} =>🥚`),1000);
    });
const cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(()=>resolve(`${egg} => 🍳`),1000);
    });

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(consol.log);