import { v4 as uuidv4 } from "uuid";

import { DraftExpense, Expense } from "../types";

export type BudgetActions =
  | { type: "ADD_BUDGET"; payload: { budget: number } }
  | { type: "SHOW_MODAL" }
  | { type: "HIDE_MODAL" }
  | { type: "ADD_EXPENSE"; payload: { expense: DraftExpense } }
  | { type: "REMOVE_EXPENSE"; payload: { id: Expense["id"] } };

export type BudegtState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
};

export const initialState: BudegtState = {
  budget: 0,
  modal: false,
  expenses: [],
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuidv4(),
  };
};
export const budgetReducer = (
  state: BudegtState = initialState,
  action: BudgetActions
) => {
  if (action.type === "ADD_BUDGET") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "SHOW_MODAL") {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === "HIDE_MODAL") {
    return {
      ...state,
      modal: false,
    };
  }

  if (action.type === "ADD_EXPENSE") {
    const expense = createExpense(action.payload.expense);
    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }

  if (action.type === "REMOVE_EXPENSE") {
    console.log(action.payload);
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      ),
    };
  }

  return state;
};
