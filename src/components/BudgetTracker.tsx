import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Grafic" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Reset App
        </button>

        <AmountDisplay label="Expense" amount={200} />
        <AmountDisplay label="available" amount={200} />
        <AmountDisplay label="Spent" amount={200} />
      </div>
    </div>
  );
};

export default BudgetTracker;
