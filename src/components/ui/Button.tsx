import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "px-6 py-3 font-body text-xs uppercase tracking-[0.15em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:bg-accent/90"
      : "border border-foreground text-foreground hover:bg-foreground hover:text-background";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
