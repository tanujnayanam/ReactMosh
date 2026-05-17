import Messages from "./Message";
import LG from "./components/ListGroup";

function App() {
  const handleSelectedItem = (item: string) => console.log(item);

  const items = ["New York", "India", "Delhi", "Columbus"];

  return (
    <div>
      <LG heading="Cities" items={items} onSelectItem={handleSelectedItem} />
    </div>
  );
}

export default App;
