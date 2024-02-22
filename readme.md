
# University Management System

This project simulates a simple university management system where you can create students, instructors, courses, and departments. Students can be enrolled in courses, instructors can be assigned to courses, and courses can belong to departments.

## Features

- **Person Class:** Defines a generic person with attributes like name and age.
- **Student Class:** Extends Person class and adds additional attributes like roll number and courses enrolled.
- **Instructor Class:** Extends Person class and adds additional attributes like salary and assigned courses.
- **Course Class:** Represents a course with attributes like ID, course name, students enrolled, and instructor assigned.
- **Department Class:** Represents a department with a name and a list of courses offered.

## Usage

1. Create instances of students, instructors, courses, and departments.
2. Enroll students in courses using the `registerForCourse` method of the `Student` class.
3. Assign instructors to courses using the `assignCourse` method of the `Instructor` class.
4. Add courses to departments using the `addCourse` method of the `Department` class.
5. Interact with the created objects to perform various operations and retrieve information about the university system.

## Example

```typescript
// Create students
let std1 = new Student("AbdulRehman", 19, "12345");
let std2 = new Student("Atif", 18, "23145");
let std3 = new Student("Yousuf", 20, "43210");

// Create instructors
let instructor1 = new Instructor("Hamzah", 22, 40000);
let instructor2 = new Instructor("Okasha", 22, 40000);

// Create courses
let course1 = new Course(1, "Web Development");
let course2 = new Course(2, "Generative AI");

// Create department
let computerScienceDept = new Department("Computer Science");

// Enroll students in courses
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std3);

// Assign instructors to courses
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);

// Add courses to department
computerScienceDept.addCourse(course1);
computerScienceDept.addCourse(course2);

// Display department courses
console.log(computerScienceDept.courses);
```

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or new features to propose, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

