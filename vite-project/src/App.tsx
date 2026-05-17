import Messages from "./Message";
import LG from "./components/ListGroup";

function App() {
  const items = ["New York", "India", "Delhi", "Columbus"];

  return (
    <div>
      <LG heading="Cities" items={items} />
    </div>
  );
}

export default App;
