
// 함수 선언만 해서는 실제 호출은 아님
//값 리턴 없는 함수
function doSomething(){
    console.log('hello');
}

function add(a,b) {
    const sum = a + b ;
    return sum;
}

//함수 호출 
doSomething();

//함수 전달 값을 호출만 하면 아무일도 안 일어남
//add(1,2);

const result = add(1,2);
console.log(result);




function doSomething2(add){
    console.log(add);
    const result = add(2,3);
    console.log(result);
}

//함수를 전달할 땐 함수 이름만 전달해줘야 된다.
doSomething2(add);

function minus(x,y) {
    const answer = x-y;
    return answer;
}

const a = minus(3,1);
console.log(a);

console.log(minus(6,2))


const addFun = add;
console.log(add);
addFun(1,2);
console.log(addFun);