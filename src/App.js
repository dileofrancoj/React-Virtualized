import faker from "faker";

import "./App.css";
import { useEffect, useState } from "react";
import NoVirtualized from "./NoVirtualized";
import Virtualized from "./Virtualized";

function App() {
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setPeople(
      [...Array(100).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: faker.lorem.lines(Math.random() * 100),
        };
      })
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <h1>{time.toISOString()}</h1>
      <Virtualized people={people} />
      {/* <NoVirtualized  people={people} /> */}
    </div>
  );
}

export default App;
