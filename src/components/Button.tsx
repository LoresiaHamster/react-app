import "./Button.css";

interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn_" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
