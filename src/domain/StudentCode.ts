export class StudentCode {
  private code: string;

  constructor(readonly sequence: number = 0, readonly date: Date = new Date()) {
    this.code = this.generateCode();
  }

  private generateCode() {
    return `${new String(this.sequence).padStart(8, "0")}${this.date.getDate()}`;
  }

  getCode() {
    return this.code
  }
}
