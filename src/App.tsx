import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";

import { BsFillCalendar2WeekFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Amsterdam",
    "Rome",
    "Barselona",
    "Brouge",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities 214"}
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <BsFillCalendar2WeekFill color="#007bff" size="20" /> Hello{" "}
          <span>World!</span>
        </Alert>
      )}
    </div>
  );
}

export default App;
