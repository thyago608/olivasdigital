import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "pink" | "black";
};

export function ButtonFilled({
  children,
  variant = "pink",
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.container} ${
        variant === "pink" ? styles.pink : styles.black
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
