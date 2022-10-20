export class Person {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly cpf: string,
    readonly birth_date: Date,
    readonly gender: string
  ) {
    if (age <= 0) throw new Error("Invalid age");
    if (!this.isValidGender(gender)) throw new Error("Gender must be 'F' or 'M'");
  }

  private isValidGender(gender: string) {
    return ["F", "M"].includes(gender);
  }
}
