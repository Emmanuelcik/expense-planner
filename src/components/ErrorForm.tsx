import { ReactNode } from "react";

type ErrorFormProps = {
  children: ReactNode;
};

const ErrorForm = ({ children }: ErrorFormProps) => {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  );
};

export default ErrorForm;
