
console.log("Question 1");
String.prototype.filter  = function (str) {
    return this.replaceAll(str,"");
}

console.log("This house not is not nice".filter("not"));

//Question 2:
console.log("Question 2");
Array.prototype.bubbleSort = function () {
    var n = this.length-1;
    var x=this;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}
var arr = [6,4,0, 3,-2,1];
console.log(arr.bubbleSort())

//Question 3A;

console.log("Question 3A");
function Person3A (name) {
    this.name =name;
}

Person3A.prototype.sayHi = function () {
    console.log('Hi...');
}
function Teacher3A (name) {
    Person3A.call(this,name);
}
Teacher3A.prototype = Object.create(Person3A.prototype);
Teacher3A.prototype.teach = function (subject) {
    console.log (this.name +' is teaching '   + subject);
}
const teacher = new Teacher3A ('Hanh');
teacher.sayHi();
teacher.teach('WAP');


//Question 3B;
console.log("Question 3B");
const Personb = {
    name: 'Default',
    setName: function (name) {
        this.name=name;
    }
}
const Teacherb = Object.create(Personb);
Teacherb.teach = function (subject) {
    console.log(this.name + ' is teaching ' + subject);
}
const teacherb = Object.create(Teacherb);
teacherb.setName('Hanh');
teacherb.teach('WAP');


//Question 4A
console.log('Question 4A----------');

const Person4A =  {
    name: 'William',
    age: 20,
    greeting: function () {
        console.log('Greetings, my name is '+name+' and I am '+age+' years old.');
    },
    salute: function () {
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!')
    }
}

const Student4A = Object.create(Person4A);
Student4A.setMajor = function (major) {
    this.major=major;
};
Student4A.greeting = function () {
    console.log('Hey, my name is '+this.name +' and I am studying '+this.major);

}

const Professor4A =Object.create(Person4A);

Professor4A.setDeparment = function (department) {
    this.department= department;
};
Professor4A.greeting = function () {
    console.log('Good day, my name is '+this.name+'  and I am in the '+this.department+' department.');
}

const student1 = Object.create(Student4A);
student1.setMajor('Math');
student1.salute();
student1.greeting();
const prof1 = Object.create(Professor4A);
prof1.setDeparment('IT');
prof1.salute();
prof1.greeting();




//Question 4B
console.log("Question 4B");
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function(){
    console.log('Greetings, my name is '+ this.name + ' and I\'m '+ this.age + ' years old');
}

Person.prototype.salute = function(){
    console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!')
}

const Student = function(name, age, major){
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function(){
    console.log('Hey, my name is ' + this.name +' and I am studying ' + this.major);
}

function Professor(name, age, department){
    Person.apply(this, [name, age]);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greeting = function(){
    console.log('my name is '+this.name+' and I am in the '+ this.department+' department');
}

const s1 = new Student('William', 20, 'CS');
s1.greeting();
s1.salute();

const prof14b = new Professor('Tina', 18, 'Utopia');
prof1.greeting();
prof1.salute();
