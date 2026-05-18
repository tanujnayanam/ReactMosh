import { useState } from "react";
import Messages from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LG from "./components/ListGroup";
import ListGroup from "./components/ListGroup";

function App() {
  const [setAlert, setAlertVisibility] = useState(false);
  const items = ["New York", "India"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="menu"
        onSelectItem={() => console.log("clicked")}
      ></ListGroup>
    </div>
  );
}

export default App;
