export type BudgetActions = { type: "ADD_BUDGET"; payload: { budget: number } };

export type BudegtState = {
  budget: number;
};

export const initialState: BudegtState = {
  budget: 0,
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

  return state;
};
