import { StudentCode } from "./StudentCode";
import { StudentCourse } from "./StudentCourse";
import { Course } from "./Course";

export class Student {
  code: StudentCode;
  courses: StudentCourse[];

  constructor(readonly id_person: number, readonly date: Date = new Date(), readonly sequence?: number) {
    this.code = new StudentCode(sequence, date);
    this.courses = [];
  }
  
  addCourse(course: Course, time_studied: number )  {
    this.courses.push(new StudentCourse(this.id_person, time_studied, course.id_course))
  }

  getCode() {
   return this.code.getCode()
  }
}
