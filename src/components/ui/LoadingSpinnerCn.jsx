import PropTypes from "prop-types";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { spinnerVariants } from "./loadingSpinnerVariants";
import { loaderVariants } from "./loadingSpinnerLoaderVariants";

export function LoadingSpinnerCn({ size, show, children, className }) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  );
}

LoadingSpinnerCn.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  className: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
