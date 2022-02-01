//1. String concatenation
console.log('my' + 'Cat');
console.log('1' +2);
console.log(`string literals: 1 + 2 = ${1+2}`);


//2. Numeric operators
console.log(1+2);
console.log(1-1);
console.log(1/1);
console.log(5%2);
console.log(2**3);
console.log(2*2);

//3.증감 (전위, 후위) preIncrement postdecrement
let Counter = 2;
const preIncrement = ++Counter;
console.log(`preInCrement: ${preIncrement}, counter: ${Counter}`);

const postdecrement = Counter++;
console.log(`postdecrement: ${preIncrement}, counter: ${Counter}`);

//4. 할당연산자
let x = 3;
let y = 5;
x += y;
x -= y;
//곱셈나눗셈도 가능


//5.<= operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. logical operators ||(or) &&(and) !(not)
//함수 호출을 하는 무거운 연산자를 맨 뒤에 놓는 것이 바람직함.
const value1 = true;
const value2 = 4 < 2; // False

console.log(`or: ${value1 || value2 || check()}`); //하나라도 참이면 참
console.log(`or: ${value1 && value2 && check()}`); //전부 참이어야 참
console.log(!value1); // 값을 반대로 True -> False / False -> True

function check(){
    for (let i = 0; i < 10; i++){
        console.log("👽")
    }
    return true;
}


//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equalit, with type conversion 타입을 신경쓰지 않고 타입이 달라도 같은 것이 들어가있으면 같다고 판단
console.log(stringFive == numberFive); // True
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion 타입을 신경써서 타입이 다르면 다른 것이라고 판단
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: 'ellie' }; 
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1==ellie2);//값이 같아도 reference가 아예 다른 주소를 할당받았기에 서로 다름 False
console.log(ellie1===ellie2); //False
console.log(ellie1==ellie3); //True
