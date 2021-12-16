var a;
console.log(a); //1. undefined 값을 대입하지 않은 변수에 접근

var obj = {a:1};
console.log(obj.a); //1
console.log(obj.b);//2. undefined 존재하지 않는 프로퍼티에 접근
console.log(b); // ReferenceError: b는 정의되지 않음

var func = function() { };
var c = func();  //3. undefined 반환 값이 없으면 undefined을 반환한 것으로 간주
console.log(c); // undefined