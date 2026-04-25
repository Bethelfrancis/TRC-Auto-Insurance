import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-block rounded-full bg-[#f5f6fa] border border-gray-200 px-4 py-2 text-sm font-semibold text-[#1a56db] ${className}`}
      {...props}
    />
  );
}
