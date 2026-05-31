import { useState } from "react";
import ExpenseList from "./components/tracker-expense/components/ExpenseList";
import ExpenseFilter from "./components/tracker-expense/components/ExpenseFilter";
import ExpenseForm from "./components/tracker-expense/components/ExpenseForm";

import categories from "./components/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "ToiletPaper", amount: 10, category: "Grocery" },
    { id: 2, description: "Hotel", amount: 2, category: "Vacation" },
    { id: 3, description: "KitchenPaper", amount: 5, category: "Grocery" },
    { id: 4, description: "Movie", amount: 12, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) =>
    setExpenses(expenses.filter((e) => e.id !== id));

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      ></ExpenseForm>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={handleDelete}
      ></ExpenseList>
    </div>
  );
}

export default App;
