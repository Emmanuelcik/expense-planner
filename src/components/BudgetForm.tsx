import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "ADD_BUDGET", payload: { budget } });
  };

  const isValid = useMemo((): boolean => {
    return typeof budget === "number" && budget % 1 === 0 && budget > 0;
  }, [budget]);
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Add your budget
        </label>
        <input
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Add your budget"
          id="budget"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-10"
        value="add you budget"
        disabled={!isValid}
      />
    </form>
  );
};

export default BudgetForm;
