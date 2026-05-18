import Messages from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LG from "./components/ListGroup";

function App() {
  const click = () => console.log("clciked");

  return (
    <div>
      <Button color="danger" handleClick={click}>
        My Button
      </Button>
    </div>
  );
}

export default App;
