// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 3. Implementation of the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 4. Interfaces for StudentClass
// Interface to describe the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface to describe the class itself
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 4. Implementing the class
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// -------------------- TESTS --------------------

// Teacher test
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Director test
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// printTeacher test
console.log(printTeacher("John", "Doe")); // J. Doe

// StudentClass test
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName());       // Alice
console.log(student.workOnHomework());    // Currently working
