//Arrow function은 언제나 무기명함수
const simplePrint = function(){
    console.log('simplePrint!');
};

const simplePrint = ()=> console.log("simplePrint");
const add = (a,b) => a+b;

//{}중괄호를 쓰게 될 경우는 return이라는 키워드를 넣어주어야 한다.
const simpleMultiply = (a,b) => {
    return a*b;
}