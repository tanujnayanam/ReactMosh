import { useState } from "react";
import Messages from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LG from "./components/ListGroup";

function App() {
  const [setAlert, setAlertVisibility] = useState(false);

  return (
    <div>
      {setAlert && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" handleClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
