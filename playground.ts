export default function play() {
  // * GOOD FOR DATA STRUCTURES
  //   interface Person {
  //     name: string;
  //     age: number;
  //   }
  //   type Human = {
  //     name: string;
  //     age: number;
  //   };
  //   class PersonClass {
  //     name: string;
  //     age: number;
  //     constructor(name: string, age: number) {
  //       this.name = name;
  //       this.age = age;
  //     }
  //   }
  // * TYPE IS GOOD FOR FUNCTIONS AND ALIASES
  //   type PersonLoggerFN = (person: Person) => string;
  //   const personLogger: PersonLoggerFN = (person: Person) => {
  //     return person.name;
  //   };
  // * OPTIONAL PARAMETERS
  // * GENERIC FUNCTIONS
  // function printInfo({[key string]: any}): void
  //
  //   function printInfo(someObject: { [key: string]: unknown }) {
  //     if (typeof someObject.age === "string") {
  //       someObject.age.toUpperCase();
  //     }
  //   }
  // * EXTENDS INTERFACE
  //   interface Person {
  //     kind: "business" | "academic";
  //     name: string;
  //     age: number;
  //   }
  //   interface BusinessPerson extends Person {
  //     kind: "business";
  //     salary: number;
  //   }
  //   interface AcademicPerson extends Person {
  //     kind: "academic";
  //     publications: string[];
  //   }
  //   // * EXTENDS TYPES
  //   //   type Car = {
  //   //     name: string;
  //   //   };
  //   //   type RaceCar = {
  //   //     speed: number;
  //   //   } & Car & { mileage: number };
  //   // * JOIN OPERATIONS
  //   type Human = BusinessPerson | AcademicPerson;
  //   const person: Human = {
  //     // You can access all properties from Business and Academic
  //     name: "John",
  //     age: 30,
  //     salary: 1000,
  //     publications: ["book1", "book2"],
  //   };
  //   const logHuman = (h: Human) => {
  //     // Only common values can be accessed
  //     console.log(h.name);
  //     // Narrow to specify what to see
  //     // if ("salary" in h) {
  //     //   console.log(h.salary);
  //     // } else if ("publications" in h) {
  //     //   console.log(h.publications);
  //     // }
  //     // if (h.kind === "academic") {
  //     //   console.log(h.publications);
  //     // } else if (h.kind === "business") {
  //     //   console.log(h.salary);
  //     // } else {
  //     //   const _never: never = h;
  //     //   return _never;
  //     // }
  //   };
  // * GENERIC ARRAY
  //   function iterate(items: Array<string>) {
  //     for (const item of items) {
  //       console.log(item.toUpperCase());
  //     }
  //   }
  //   iterate(["a", "b", "c"]);
}
