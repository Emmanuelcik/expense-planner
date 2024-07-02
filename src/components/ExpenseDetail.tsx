import { useMemo } from "react";
import { Expense } from "../types";
import { formatDate } from "../utils";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";

import {
  LeadingActions,
  SwipeAction,
  SwipeableListItem,
  SwipeableList,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

type ExpenseDetailProps = {
  expense: Expense;
};

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => {}}>Update</SwipeAction>
    </TrailingActions>
  );
  const trailingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {}} destructive={true}>
        Delete
      </SwipeAction>
    </LeadingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
          <div>
            <img
              src={`/icono_${categoryInfo.icon}.svg`}
              alt="Expense Icon"
              className="w-20"
            />
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-s, font-bold uppercase text-slate-500">
              {categoryInfo.name}
            </p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">
              {formatDate(expense.date!.toString())}
            </p>
          </div>

          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetail;
