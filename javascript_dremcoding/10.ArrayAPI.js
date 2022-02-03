{

    //배열을 string으로 변환해주는 함수 join()
    const fruit = ['apple', 'banana', 'orange'];
    const result = fruit.join('|'); // 구분자는 선택 사항!
    console.log(result);
}

{
    //주어진 string을 배열로 만들어주는 함수 split()
    const fruits = 'a,b,c,d';
    const result = fruits.split(','); //구분자는 필수적! limit은 선택적 사항
    console.log(result);
}

{
    // 주어진 배열을 거꾸로 뒤집는 함수 revers()
    const array = [1,2,3,4,5];
    const result = array.reverse();


    // reverse는 배열 자체를 뒤집어 버린다! (주의)
    console.log(result);
    console.log(array);
}

{
    //앞의 두개 요소만 지우는 방법 slice()


    //배열 자체를 수정하는 splice()
    const array = [1,2,3,4,5]
    const result = array.splice(0,2);
    console.log(result); // 1,2
    console.log(array); //3,4,5
    //splice는 지운 요소가 아닌 지우고 나머지를 받고 싶은데 지운 요소를 반환해 줌


    //원하는 값을 return 해주는 slice
    const array = [1,2,3,4,5]
    const result = array.slice(2,5);
    console.log(result); //3,4,5
    console.log(array); //1,2,3,4,5
}

class Student {
    constructor(name,age,enrolled,score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
]

{
    // 학생 점수가 90점인 학생을 찾아라 find()
    /* call back 함수라 모든 요소를 돌면서 찾는 값이 있다면 find 함수는 종료되고
       찾은 값을 return 해준다. */
    const result = students.find((student)=>student.score === 90);
    console.log(result);
}

{
    //enrolled가 true인 학생들만 배열로 만들어라 filter()
    const result = students.filter((student) => student.enrolled);
    console.log(result)
}

{
    //학생 배열에서 점수만 뽑아서 새로운 배열로 만들어라 map()
    //map() 지정 콜백함수를 불러 각각의 값을 새로운 변수로 변환하는 것을 말한다.
    const result = students.map((student) => student.score);
    console.log(result);
}

{
    // 학생 중 점수 50점보다 낮은 학생이 있는지를 확인해라
    // some() 하나라도 조건을 만족하는 요소가 있는지 찾고 있으면 true 없으면 false
    const result = students.some((student) => student.score < 50);
    console.log(result); // true가 나와야 됨
    

    //every() 모든 조건을 만족할 때 
    const result2 = !students.every((student) => student.score < 50);
    console.log(result2); // true가 나와야 됨

}

{
    //평균값을 구해라
    //reduce() 우리가 원하는 시작점부터 모든 배열을 돌며 어떤 값을 누적할 때 쓰는 것
    const result = students.reduce((prev, curr)=>prev + curr.score,0);
    console.log(result/students.length);
}

{
    //학생들의 모든 점수를 string으로 변환해서 나타내라
    //map을 사용해서 원하는 값만 배열로 만들어 준 뒤 문자로 변환 시켜주는 join 해준다.
    const result = students.map((student) => student.score).join();
    console.log(result);
}

// 함수형 프로그래밍 !! 

{
    const result = students
    .map((student) => student.score)
    .sort((a,b)=>a-b) //점수가 낮은 것부터 나오게!
    .join();
    console.log(result);
}