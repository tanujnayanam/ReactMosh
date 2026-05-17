function ListGroup() {
  let items = ["New york", "Delhi", "India", "Patna"];
  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No list element found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
