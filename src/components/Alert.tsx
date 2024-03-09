import { ReactNode } from "react";
import "./Alert.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert_primary alert_dismissible">
      {children}
      <button type="button" className="close" onClick={onClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
