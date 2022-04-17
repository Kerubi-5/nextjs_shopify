export default function play() {
  // * GOOD FOR DATA STRUCTURES
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // type Human = {
  //   name: string;
  //   age: number;
  // };
  // class PersonClass {
  //   name: string;
  //   age: number;
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  // * TYPE IS GOOD FOR FUNCTIONS AND ALIASES
  // type PersonLoggerFN = (person: Person) => string;
  // const personLogger: PersonLoggerFN = (person: Person) => {
  //   return "Hello world";
  // };
  // * OPTIONAL PARAMETERS
  // TODO: Change this GENERIC FUNCTIONS NOT WORKING
  // function printInfo(someObject: { [key: string]: unknown }) {
  //   if (typeof someObject.age === "string") {
  //     someObject.age.toUpperCase();
  //   }
  // }
  // * EXTENDS INTERFACE
  // interface IPerson {
  //   kind: "business" | "academic" | "developer"; // business or academic
  //   name: string;
  //   age: number;
  // }
  // interface BusinessPerson extends IPerson {
  //   kind: "business";
  //   salary: number;
  // }
  // interface AcademicPerson extends IPerson {
  //   kind: "academic";
  //   publications: string[];
  // }
  // * NEVER CASE
  // interface DeveloperPerson extends IPerson {
  //   kind: "developer";
  //   skills: string[];
  // }
  // * EXTENDS TYPES
  // type Car = {
  //   name: string;
  // };
  // type RaceCar = {
  //   speed: number;
  // } & Car & { mileage: number };
  // RaceCar = name, speed, mileage
  // * JOIN OPERATIONS
  // type Human = BusinessPerson | AcademicPerson;
  // // ! ERROR SHOULD BE ABLE TO ACCESS ALL PROPERTIES
  // const person: Human = {
  //   // You can access all properties from Business and Academic
  //   name: "John",
  //   age: 30,
  //   salary: 1000,
  //   publications: ["book1", "book2"],
  // };
  // const logHuman = (h: Human) => {
  //   // Only common values can be accessed
  //   console.log(h.name);
  //   // Narrow to specify what to see
  //   if ("salary" in h) {
  //     console.log(h.salary);
  //   } else if ("publications" in h) {
  //     console.log(h.publications);
  //   }
  //   if (h.kind === "academic") {
  //     console.log(h.publications);
  //   } else if (h.kind === "business") {
  //     console.log(h.salary);
  //   } else {
  //     const _never: never = h;
  //     return _never;
  //   }
  // };
  // * TYPECASTING
  // interface ISample {
  //   name: string;
  // }
  // let b = {
  //   name: "John",
  // };
  // // let a = b as ISample;
  // // let a = <ISample>b;
  // * GENERIC ARRAY
  // function iterate(items: Array<string>) {
  //   for (const item of items) {
  //     console.log(item.toUpperCase());
  //   }
  // }
  // iterate(["a", "b", "c"]);
  // * GENERIC EXTENDS
  // interface Person {
  //   name: string;
  //   age: number;
  //   city: string;
  // }
  // interface Student extends Person {
  //   grade: number;
  // }
  // interface BusinessPerson extends Person {
  //   salary: number;
  // }
  // interface ILogger<T extends IPerson> {
  //   data: T;
  //   log(): void;
  // }
  // const logger: ILogger<IBusinessPerson> = {
  //   data: {
  //     name: "John",
  //     age: 30,
  //     city: "New York",
  //     salary: 1000,
  //   },
  //   log() {
  //     console.log(this.data.name);
  //   },
  // };
  // * TERNARY EXTENDS
  // interface Person {
  //   name: string;
  // }
  // interface Student extends Person {
  //   age: number;
  // }
  // interface PostGraduadeStudent extends Person {
  //   age: number;
  //   projects: string[];
  // }
  // type StudentInfo<T extends any = Student> = T extends Student
  //   ? {
  //       data: T;
  //       grades: number[];
  //     }
  //   : string;
  // type Car = { engine: string };
  // function logStudentInfo(info: StudentInfo<Student>) {
  //   console.log(info);
  //   console.log(info);
  // }
  // * SINGLE TYPES
  // type SingleType<T> = T extends any[] ? T[number] : unknown;
  // type Type1 = SingleType<string[]>;
  // type Type2 = SingleType<number[]>;
  // type Type3 = SingleType<Person>;
  // * MAPPED TYPES
  // type CustomArray<T> = {
  //   [index: number]: string;
  // };
  // type CustomObject<T = string | number | Person> = {
  //   [key: string]: T;
  // };
  // * INFER
  // type ReturnType<T> = T extends () => infer R ? R : unknown;
  // function logger() {
  //   return "hello world";
  // }
  // const loggerReturn: ReturnType<typeof logger> = "sdd";
  // // * KEYOF
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // type KeyOf<T> = keyof T;
  // type KeyOfPerson = KeyOf<Person>;
  // const key: KeyOfPerson = "name";
  // * INFER RETURN TYPE
  // type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }>
  //   ? Props
  //   : never;
  // const getHelloProps = async function () {
  //   const greeting = "Hello";
  //   return {
  //     props: {
  //       greeting,
  //       data: {
  //         cars: ["car1", "car2"],
  //       },
  //     },
  //   };
  // };
  // function sayHello(props: InferHelloProps<typeof getHelloProps>) {
  //   console.log(props.greeting);
  // }
}
