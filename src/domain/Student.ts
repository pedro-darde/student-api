import { Person } from "./Person";
import { StudentCode } from "./StudentCode";

export class Student {
  code: StudentCode;

  constructor(readonly person: Person, readonly sequence?: number) {
    this.code = new StudentCode(sequence, person.birth_date);
  }
  
}
