import { useReducer, createContext } from "react";
import {
  initialState,
  budgetReducer,
  BudegtState,
  BudgetActions,
} from "../reducers/budegetReducer";

type BudegetContextProps = {
  state: BudegtState;
  dispatch: React.Dispatch<BudgetActions>;
};

type BudgetProviderProsp = {
  children: React.ReactNode;
};
export const BudgetContext = createContext<BudegetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProsp) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
