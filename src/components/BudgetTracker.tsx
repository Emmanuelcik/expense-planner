import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

const BudgetTracker = () => {
  const { state, available, totalExpenses } = useBudget();

  const percentage = Number(((totalExpenses / state.budget) * 100).toFixed(2));

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#DC2626" : "#3b82f6",
            trailColor: percentage === 100 ? "#DC2626" : "#3b82f6",
            textSize: 10,
          })}
          text={`${percentage}% Spent`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Reset App
        </button>

        <AmountDisplay label="Expense" amount={state.budget} />
        <AmountDisplay label="available" amount={available} />
        <AmountDisplay label="Spent" amount={totalExpenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;
