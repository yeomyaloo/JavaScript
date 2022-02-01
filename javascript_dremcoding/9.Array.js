'use strict';
/* 1. object VS Array

당근 - property만 있고 method는 없을 수 있고, 서로 연관된 것들만 모아놓을 수 있다.
자료구조 - 동일 타입 object를 담는 것이고 그러나 JS는 동적 타입 언어이기 때문에, 한 자료구조 안에 여러 타입의 자료구조를 담을 수 있다.

더 나아가서 자료구조 + 알고리즘을 같이 공부해야 한다.
검색 삽입 정렬 삭제 --> 얼마나 시간이 걸리는지를 고려해서 Big O 시간복잡도를 고려해서 알고리즘 구성!

*/

//2. Array 선언(Declaration)
const arr1 = new Array();
const arr2 = [1,2]; //총 길이가 2인 배열

//2. Index position
const fruit = ['👽','🥑'];
console.log(fruit);
console.log(fruit.length); // 2
console.log(fruit[0]); // 👽
console.log(fruit(fruit.length-1)); //배열의 제일 마지막 인덱스를 받아오기

//3. Looping over an array

//a. for
for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//b. for of
for(let j of fruit){
    console.log(j);
}

//c. forEach
//forEach는 callBack함수를 받아옴.
fruit.forEach((fruit) => console.log(fruit));


//4. Addition, deletion, copy
//push -> 맨 뒤의 값을 넣는 것
fruit.push('❤','🐸');
console.log(fruit);
//👽,🥑,❤,🐸


//pop -> 맨 뒤의 값을 빼오는 것
fruit.pop();
fruit.pop();
console.log(fruit);
//👽,🥑


//unshift : 앞의 값을 넣는 것
fruit.unshift('❤','🐸');
console.log(fruit);
//❤,🐸,👽,🥑


//shift : 앞에서부터 데이터를 빼는 것
fruit.shift();
console.log(fruit);
//👽,🥑

/* NOTE!!! shift, unshift는 매우 느림 pop과 push보다!!!
기존의 push, pop은 데이터를 넣고 빼고가 원래 있던 가용공간에 넣고 빼고를 진행하기 때문이다.
그러나 shift와 unshift는 데이터를 앞에 넣기 위해 기존의 값들을 넣는 데이터의 개수만큼 밀고
밀고나서 남은 공간에 데이터를 넣기 때문에 느려지게 된다. 또한 앞에서 삭제하는 경우도 삭제 후 땡겨줘야 하기 때문에 느려짐
*/

//splice: 지정된 포지션의 데이터를 지우는 법
fruit.push('🍟','🥓','🍕');
console.log(fruit);
//👽,🥑,🍟,🥓,🍕
//0   1  2   3  4
fruit.splice(1,1); // 배열명.splice(지우고 싶은 인덱스,지우려는 갯수)
console.log(fruit);
//👽,🍟,🥓,🍕

fruit.splice(1,1,'🥗','🥩');
console.log(fruit);
//👽,🥗,🥩,🥓,🍕

// 두가지의 배열을 묶어 만들기
const fruit2 = ['a','b'];
const newFruits = fruit.concat(fruit2);
console.log(newFruits);
//👽,🥗,🥩,🥓,🍕,a,b

//Searching 
//indexOf() 찾는 문자가 몇번째 index에 있는지 찾아줌
console.log(fruit);

console.log(fruit.indexOf(a));
//5

console.log(fruit.indexOf('👽'));
// 0


//includes() 찾는 문자가 해당 배열에 있는지를 찾아줌
console.log(fruit.includes('👽'));
//True

console.log(fruit.includes('5'));
//-1

//lastIndexOf
fruit.push('👽');
console.log(fruit.indexOf('👽')); //맨 처음 만나는 찾는 문자의 index를 돌려준다.
console.log(fruit.lastIndexOf('👽')); // 맨 마지막에 만나는 찾는 문자의 index를 돌려준다.



