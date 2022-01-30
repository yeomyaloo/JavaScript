'use strict';
/* 
1. 클래스: template VS object: instance of a class
2. 클래스는 자바스크립트 내에서 생긴지 얼마 안 된 개념이다.
*/


//3. 클래스 선언
class Person{
    //constructor
    constructor(name,age){

        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name} : hello!`);
    }
}


//4. 객체(Object) 생성
const yaloo = new Person('yaloo', 20);
console.log(yaloo.name);
console.log(yaloo.age);
yaloo.speak();



//5. Getter & Setter
class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        //return this.age;

        //callStack 오류를 방지 하기 위해서 
        return this._age;
    }

    set age(value){
        // 값 설정을 위해서 값을 받아와야 된다.
        //this.age = value;

        //callStack 오류를 방지 하기 위해서 
        this._age = value;
    }
}

/*사람의 나이가 -1인 것은 말이 안 됨. 
--> 잘못 설정을 해도 방어적인 자세로 사용할 수 있게 해주는 것이 getter setter이다.*/
const user1 = new User('steve', 'job',-1);

//_age로 불러오지 않는 이유는 Getter와 Setter가 있기 때문이다.
console.log(user1.age);




// 6. public private
//최근에 추가된 개념으로 아직 많이는 사용을 안 한다고 한다.
class Experiment{
    //constructor 없이 사용 가능
    publicField = 2; //그냥 냅다 쓰면 public
    #privateField = 0; //private이기 때문에 외부에서는 호출 XX
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // 프라이빗으로 사용 X


// 7. static
//이것 역시 추가된지 얼마 지나지 않아 많이들 사용하지 않는다.
class Article{
    static publisher = "Yaloo world"
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

//객체를 생성하지만 static을 사용했기 때문에 객체를 통해 접근 하는 것이 아닌!! 
//클래스 자체로 접근해야 사용 가능하다.!!
const article1 = new Article(1);
const article2 = new Article(2);

// 객체마다 할당되는 것이 아니기에 클래스를 사용해서 접근해야 한다.
// consol.log(article1.publisher) --> XXXX 스태틱을 사용했기 때문!!
console.log(Article.publisher);


// 8. 상속 & 다양성
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width * this.height;
    }
}

//상속을 이용해서 동일한 것들을 재사용할 수 있게 된다. 
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        //부모의 draw 메소드도 호출 가능
        super.draw();

        //자기 맘대로 draw를 고쳐 사용도 가능
        console.log("🔺");
    }
    
    getArea(){

        //overriding
        return (this.width * this.height) / 2; 
    }

}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();

const triangle = new Triangle(20,20,'blue');
triangle.draw();


// 9. instanceOf operator
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 오브젝트인지 아닌지를 확인하는 것
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);