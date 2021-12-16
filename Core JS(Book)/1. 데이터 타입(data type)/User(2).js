// 객체의 가변성에 따른 문제점의 해결qk

var user = {
    name: 'Jaemin',
    gender: 'male'
};

var changeName = function(user, newName){
    return{
        name: newName,
        gender:user.gender
    };
};

var user2 = changeName(user,'jung');

if (user !== user2){
    console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name,user2.name); 
console.log(user===user2);

