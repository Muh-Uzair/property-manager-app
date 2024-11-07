import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import PropTypes from "prop-types";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../../components/ui/select"; // Adjust path

import { allCountries } from "@/utils/constants";

// const allCountries = ["Pakistan", "India", "Bangladesh", "Oman", "UAE"];

const HookFormSelect = React.forwardRef(({ onValueChange, ...props }, ref) => (
  <SelectPrimitive.Root
    id={props?.id}
    name={props?.id}
    onValueChange={onValueChange}
  >
    <SelectTrigger
      className="border-gray-300 text-gray-400 focus:border-none focus:outline-none focus:ring-[1px] focus:ring-brand-color-500 focus:ring-offset-0"
      ref={ref}
      {...props}
    >
      <SelectValue placeholder={props?.placeholder} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Nationalities</SelectLabel>
        {allCountries.map((val, i) => (
          <SelectItem key={i} value={val}>
            {val}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </SelectPrimitive.Root>
));

HookFormSelect.displayName = "HookFormSelect";

HookFormSelect.propTypes = {
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default HookFormSelect;
