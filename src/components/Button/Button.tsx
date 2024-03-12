import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "Primary" | "Secondary";
  onClick: () => void;
}

const Button = ({ children, color = "Primary", onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
