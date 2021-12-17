function a() {
    var b;
    var b = function b(){}//함수 표현식

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
}

a();