class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id === 'yaloo' && password === 'hoho') ||
                (id === 'coder' && password === 'nono')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }

        },2000);
    }

    getRoles(user,onSuccess,onError){
        setTimeout(()=>{

            if (user ==='yaloo'){
                onSuccess({name:'yaloo', role:'admin'});
            }else{
                onError(new Error('no access'))
            }
        });
    }
}

//1. id / password를 받아오긩
//2. 로그인 하긩
//3. 역할 요청으로 받아오긩
//4. 성공적으로 받아오면 이를 출력해보긩

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error =>{
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

