import React from "react";

export interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled = false }: Props) => {
  return <button disabled={disabled}>{children}</button>;
};

export default Button;
