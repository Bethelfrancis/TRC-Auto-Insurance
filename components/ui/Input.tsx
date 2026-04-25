import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`rounded-lg border-2 border-gray-200 px-4 py-3 text-[#111827] placeholder-[#6b7280] focus:border-[#1a56db] focus:outline-none transition-colors ${className}`}
      {...props}
    />
  );
}
