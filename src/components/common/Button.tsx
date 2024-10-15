import { cn } from "@/src/utils/cn";
import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "v1" | "v2" | "v3" | "v4" | "v5";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  children?: ReactNode;
  value: string | number;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  icon,
  value,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors duration-300",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-white text-black/30 rounded-sm h-10 w-10": variant === "v1",
          "bg-white text-yellow-600 borderrounded-none font-semibold text-3xl":
            variant === "v2",
          " bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white transition-all ":
            variant === "v3",
            "bg-white border-b border-gray-800 uppercase text-sm font-medium rounded-none":
            variant === "v4",
            "bg-white text-yellow-600 border border-yellow-600 rounded-none font-semibold text-3xl":
            variant === "v5",
          "opacity-50 cursor-not-allowed": disabled,
        },
        {
          "px-3 py-1 text-sm": size === "small",
          "px-5 py-3 text-base": size === "medium",
          "px-12 py-3 text-lg": size === "large",
        },
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {value}
    </button>
  );
};

export default Button;
