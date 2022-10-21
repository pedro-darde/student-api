import { Course } from "./domain/Course";
import { Person } from "./domain/Person";
import { Student } from "./domain/Student";

const person = new Person(
  "Thailan Chiele Erthal",
  26,
  "000.000.000-00",
  new Date(1, 1, 1996),
  "F"
);

const student = new Student(1, person.birth_date, 666);

function courses() {
    student.addCourse(new Course(1, 'test', 100), 0);
    console.log(student.courses);
}

courses()