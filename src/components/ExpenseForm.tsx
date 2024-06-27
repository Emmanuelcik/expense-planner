import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState, ChangeEvent } from "react";
import { DraftExpense, Value } from "../types";
import ErrorForm from "./ErrorForm";

const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("");

  const handleChangeDate = (value: Value) => {
    setExpense({ ...expense, date: value });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const isAmmountField = ["amount"].includes(name);

    setExpense({ ...expense, [name]: isAmmountField ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validation

    if (Object.values(expense).includes("")) {
      setError("Please fill all fields");
      return;
    }
  };
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2 ">
        New Expense
      </legend>

      {error && <ErrorForm>{error}</ErrorForm>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName">Expense name:</label>
        <input
          type="text"
          id="expenseName"
          placeholder="Name your expense"
          className="bg-slate-100 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          placeholder="Expense amount"
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          className="bg-slate-100 p-2"
          value={expense.category}
          onChange={handleInputChange}
        >
          <option value="">-- Select --</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date">Date:</label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-2"
        value={"add expense"}
      />
    </form>
  );
};

export default ExpenseForm;
