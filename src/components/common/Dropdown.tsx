import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DropdownProps {
  options: (string | number)[];
  selectedValue: string | number;
  onChange: (value: string) => void;
  className?: string
}

export default function Dropdown({
  options,
  selectedValue,
  onChange,
  className
}: DropdownProps) {
  return (
    <Select value={selectedValue.toString()} onValueChange={onChange} >
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option.toString()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
