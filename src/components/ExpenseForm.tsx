import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ExpenseForm = () => {
  return (
    <form action="">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2 ">
        New Expense
      </legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName">Expense name:</label>
        <input
          type="text"
          id="expenseName"
          placeholder="Name your expense"
          className="bg-slate-100 p-2"
          name="expenseName"
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
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" className="bg-slate-100 p-2">
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
        <DatePicker className="bg-slate-100 p-2 border-0" />
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
