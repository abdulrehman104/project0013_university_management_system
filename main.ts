import { log } from "console";

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];
  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }
  registerForCourse(course: Course) {
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
  salary: number;
  courses: Course[] = [];
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assignCourse(course: Course) {
    this.courses.push(course);
  }
}

let instructor1 = new Instructor("Hamzah", 22, 40000);
let instructor2 = new Instructor("Okasha", 22, 40000);

// console.log(instructor1);
// console.log(instructor2);

class Course {
  id: number;
  courseName: string;
  student: Student[] = [];
  instructor: Instructor[] = [];
  constructor(id: number, courseName: string) {
    this.id = id;
    this.courseName = courseName;
  }
  addStudent(std: Student) {
    this.student.push(std);
    std.courses.push(this);
  }
  setInstructor(ins: Instructor) {
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
  name: string;
  courses: Course[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addCourse(course: Course) {
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
