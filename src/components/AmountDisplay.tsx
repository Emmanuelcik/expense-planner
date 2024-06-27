import { formatCurrency } from "../utils";

type AmoutDisplayProps = {
  label?: string;
  amount: number;
};

const AmountDisplay = ({ label, amount }: AmoutDisplayProps) => {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  );
};

export default AmountDisplay;
