import * as React from "react";

import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Floating Input component
const FloatingInput = React.forwardRef(function FloatingInput(
  { id, className, ...props },
  ref,
) {
  return (
    <Input
      id={id}
      placeholder=" "
      className={cn(
        "peer border focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border focus-visible:border-brand-color-500", // Custom focus styles
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingInput.displayName = "FloatingInput";

FloatingInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// Floating Label component
const labelCustomAddedStyles =
  " peer-focus:text-brand-color-500 peer-focus:rounded-full peer-focus:border-brand-color-500 peer-focus:border-[0.5px]  peer-focus:bg-brand-color-100";
const FloatingLabel = React.forwardRef(function FloatingLabel(
  { className, ...props },
  ref,
) {
  return (
    <Label
      className={cn(
        `${labelCustomAddedStyles} peer-focus:secondary peer-focus:dark:secondary bg-background dark:bg-background absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

FloatingLabel.propTypes = {
  className: PropTypes.string,
};

// Floating Label Input component
const FloatingLabelInput = React.forwardRef(function FloatingLabelInput(
  { id, label, ...props },
  ref,
) {
  return (
    <div className="relative">
      <FloatingInput
        ref={ref}
        id={id}
        aria-labelledby={`${id}-label`}
        {...props}
      />
      {label && (
        <FloatingLabel id={`${id}-label`} htmlFor={id}>
          {label}
        </FloatingLabel>
      )}
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

FloatingLabelInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export { FloatingInput, FloatingLabel, FloatingLabelInput };
