

function a() {} // 함수 선언문 함수명 a가 곧 변수명
a(); // 실행 OK
    
var b = function () {} // 함수 표현식 변수명 b가 곧 함수명
b(); // 실행 OK
    
var c = function d() {} // 기명 함수 표현식 변수명 - c 함수명 - d
c(); // 실행 OK
d(); // 에러!!
