import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground font-semibold hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/80",
        outline: "text-foreground",
        DONE: "border-transparent bg-green-200 text-zinc-800 hover:bg-green-200/80 select-none",
        WIP: "border-transparent bg-yellow-200 text-zinc-800 hover:bg-green-200/80 select-none",
        INACTIVE:
          "border-transparent bg-red-200 text-zinc-800 hover:bg-green-200/80 select-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
