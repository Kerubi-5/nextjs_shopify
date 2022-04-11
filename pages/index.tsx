export default function Home() {
  const Person: { firstName: string; lastName: string } = {
    firstName: "John Kim",
    lastName: "Querobines",
  };

  return (
    <div>
      Intro: Hello World! My Name is {Person.firstName + " " + Person.lastName}
    </div>
  );
}
