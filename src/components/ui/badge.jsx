// Badge.jsx
import PropTypes from "prop-types";
import { badgeVariants } from "./badgeVariants"; // Import from the new file
import { cn } from "@/lib/utils";

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};
