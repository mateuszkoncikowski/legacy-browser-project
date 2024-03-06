import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import * as React from "react";

const inputVariants = cva("bg-neutrals-100 rounded-lg", {
  variants: {
    defaultVariants: {
      size: "default",
    },
  },
});

type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, "size"> &
  VariantProps<typeof inputVariants> & {
    icon: LucideIcon;
    title: string;
    isCollapsible?: boolean;
  };

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, icon, title, isCollapsible = true, ...props }, ref) => {
    return (
      <div
        className={cn("mt-4", inputVariants({ className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
