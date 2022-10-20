import { Person } from "./src/domain/Person";

test("Deve criar uma pessoa com nome,idade,cpf,data de nascimento,sexo", () => {
  const person = new Person(
    "Thomas Schuster",
    27,
    "03433172064",
    new Date(20, 20, 1995),
    "F"
  );

  expect(person).toBeDefined();
});
