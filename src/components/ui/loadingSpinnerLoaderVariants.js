import { cva } from "class-variance-authority";

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      small: "size-6",
      medium: "size-[32px]",
      large: "size-12",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export { loaderVariants };
