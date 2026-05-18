import Alert from "./Alert";

interface Props {
  children: string;
  handleClick: () => void;
  color?: string;
}

const Button = ({ children, handleClick, color = "primary" }: Props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
