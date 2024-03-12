import { ReactNode } from "react";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div
      className={[
        styles.alert,
        styles.alertPrimary,
        styles.alertDismissible,
      ].join(" ")}
    >
      {children}
      <button type="button" className={styles.close} onClick={onClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
