function ListGroup() {
  let items = ["New york", "Delhi", "India", "Patna"];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No list element found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} onClick={() => console.log(item, index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
