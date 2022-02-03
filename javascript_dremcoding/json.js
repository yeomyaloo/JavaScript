//JSON

//1. Object to JSON 오브젝트를 제이슨으로 만드는 법
// Object를 String으로 바꾸는 거니까 stringify 사용
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: ()=>{
        console.log(`${name} can jump!`)
    },
};

//Symbol처럼 자바스크립트에서만 제공되는 것들은 JSON에 표기되지 않습니다~
json = JSON.stringify(rabbit);
console.log(json);

//원하는 프로퍼티를 고를 수도 있다
json = JSON.stringify(rabbit,['name','color','size']);
console.log(json);


//call back 함수로 사용도 가능(좀 더 세밀하게)
json = JSON.stringify(rabbit,(key,value) => {
    console.log(`${key}, value: ${value}`);
    return key === 'name' ? 'yaloo' : value;
});
console.log(json);


//2. JSON to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
const obj = JSON.parse(json,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
//obj.jump(); //에러 발생

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());



