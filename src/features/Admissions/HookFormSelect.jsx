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

const HookFormSelect = React.forwardRef(({ onValueChange, ...props }, ref) => (
  <SelectPrimitive.Root
    id={props?.id}
    name={props?.id}
    onValueChange={onValueChange}
  >
    <SelectTrigger ref={ref} {...props}>
      <SelectValue placeholder={props?.placeholder} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{"Nationalities"}</SelectLabel>
        <SelectItem value="art">Argentina Time (ART)</SelectItem>
        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
        <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
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
