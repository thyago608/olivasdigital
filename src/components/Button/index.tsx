import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  variant?: "pink" | "white";
};

export function Button({ children, variant = "pink", ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.container} ${
        variant === "pink" ? styles.pink : styles.white
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
