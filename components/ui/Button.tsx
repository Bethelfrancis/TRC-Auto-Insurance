import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-[#f97316] px-6 py-3 font-bold text-white hover:bg-[#ea6c0a] transition-colors disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
