import { ReactDOM, ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick: () => void;
  color?: string;
}

const Button = ({ children, handleClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => console.log("Clicked")}
    >
      {children}
    </button>
  );
};

export default Button;
