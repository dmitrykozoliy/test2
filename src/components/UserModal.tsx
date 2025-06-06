import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./UserModal.module.css";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

export default function UserModal({ onClose, children }: Props) {
  // close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
} 