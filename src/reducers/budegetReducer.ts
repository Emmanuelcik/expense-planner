import { v4 as uuidv4 } from "uuid";

import { DraftExpense, Expense } from "../types";

export type BudgetActions =
  | { type: "ADD_BUDGET"; payload: { budget: number } }
  | { type: "SHOW_MODAL" }
  | { type: "HIDE_MODAL" }
  | { type: "ADD_EXPENSE"; payload: { expense: DraftExpense } }
  | { type: "REMOVE_EXPENSE"; payload: { id: Expense["id"] } }
  | { type: "GET-EXPENSE-BY-ID"; payload: { id: Expense["id"] } }
  | { type: "UPDATE-EXPENSE"; payload: { expense: Expense } }
  | { type: "RESTART_APP" };

export type BudegtState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense["id"];
};

const intialBudget = (): number => {
  const localStorageBudget = localStorage.getItem("budget");
  return localStorageBudget ? Number(localStorageBudget) : 0;
};

const localStorageExpenses = (): Expense[] => {
  const localStorageExpenses = localStorage.getItem("expenses");
  return localStorageExpenses ? JSON.parse(localStorageExpenses) : [];
};

export const initialState: BudegtState = {
  budget: intialBudget(),
  modal: false,
  expenses: localStorageExpenses(),
  editingId: "",
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
      editingId: "",
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
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      ),
    };
  }

  if (action.type === "GET-EXPENSE-BY-ID") {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true,
    };
  }

  if (action.type === "UPDATE-EXPENSE") {
    return {
      ...state,
      expenses: state.expenses.map((expense) =>
        expense.id === action.payload.expense.id
          ? action.payload.expense
          : expense
      ),
      modal: false,
      editingId: "",
    };
  }

  if (action.type === "RESTART_APP") {
    return {
      ...state,
      budget: 0,
      expenses: [],
      editingId: "",
    };
  }
  return state;
};
