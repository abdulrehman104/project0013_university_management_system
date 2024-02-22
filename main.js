"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
        course.addStudent(this);
        //   course.addStudent(this)
    }
}
let std1 = new Student("AbdulRehman", 19, "12345");
let std2 = new Student("Atif", 18, "23145");
let std3 = new Student("Yousuf", 20, "43210");
// console.log(std1.courses[0]);
// console.log(std1);
// console.log(std2);
// console.log(std3);
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
let instructor1 = new Instructor("Hamzah", 22, 40000);
let instructor2 = new Instructor("Okasha", 22, 40000);
// console.log(instructor1);
// console.log(instructor2);
class Course {
    constructor(id, courseName) {
        this.student = [];
        this.instructor = [];
        this.id = id;
        this.courseName = courseName;
    }
    addStudent(std) {
        this.student.push(std);
        std.courses.push(this);
    }
    setInstructor(ins) {
        this.instructor.push(ins);
    }
}
let course1 = new Course(1, "web development");
let course2 = new Course(1, "Gen AI");
course1.addStudent(std1);
course1.addStudent(std2);
course1.setInstructor(instructor1);
console.log(course1.courseName);
course2.addStudent(std3);
course2.setInstructor(instructor2);
console.log(course1);
console.log(course2);
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
let d1 = new Department("Computer Science");
d1.addCourse(course1);
// d1.addCourse(course2);
console.log(d1.courses);
// console.log(d1);
// console.log(d1.courses[0]);
// console.log(d1.courses[1]);
