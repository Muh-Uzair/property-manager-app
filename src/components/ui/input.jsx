import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ id, className, type, ...props }, ref) => {
  return (
    <input
      autoComplete={id}
      id={id}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus:border focus:border-brand-color-500 focus-visible:outline-none focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

import PropTypes from "prop-types";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

export { Input };
