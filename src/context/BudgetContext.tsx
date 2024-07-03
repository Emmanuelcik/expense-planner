import { useReducer, createContext, useMemo } from "react";
import {
  initialState,
  budgetReducer,
  BudegtState,
  BudgetActions,
} from "../reducers/budegetReducer";

type BudegetContextProps = {
  state: BudegtState;
  dispatch: React.Dispatch<BudgetActions>;
  totalExpenses: number;
  available: number;
};

type BudgetProviderProsp = {
  children: React.ReactNode;
};
export const BudgetContext = createContext<BudegetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProsp) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpenses = useMemo(
    () => state.expenses.reduce((tot, expense) => expense.amount + tot, 0),
    [state.expenses]
  );

  const available = state.budget - totalExpenses;

  return (
    <BudgetContext.Provider
      value={{ state, dispatch, totalExpenses, available }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
