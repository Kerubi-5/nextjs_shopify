import { useEffect } from "react";
import play from "../playground";

export default function Home() {
  const Person: { firstName: string; lastName: string } = {
    firstName: "John Kim",
    lastName: "Querobines",
  };

  useEffect((): void => {
    play();
  }, []);

  return (
    <div>
      Intro: Hello World! My Name is {Person.firstName + " " + Person.lastName}
    </div>
  );
}
