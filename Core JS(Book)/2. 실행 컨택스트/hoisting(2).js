// 매개변수와 변수에 대한 호이스팅(2) -- 호이스팅을 마친 상태

function a(){
    var x; // 수집 대상 1 (변수 선언 부분)
    var x; // 수집 대상 2 (변수 선언 부분)
    var x; // 수집 대상 3 (변수 선언 부분)
    
    x = 1; // 수집 대상 1의 할당 부분
    console.log(x); // (1)
    console.log(x); // (2)
    x = 2; // 수집대상 3의 할당 부분
    console.log(x); // (3)

}

a(1)