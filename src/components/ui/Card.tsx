import { CollapsibleContainer } from "@/components/CollapsibleContainer";
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
    const Icon = icon;

    return (
      <CollapsibleContainer
        isCollapsible={isCollapsible}
        headerComponent={
          <div className="flex">
            <Icon className="mr-2 text-petrol-600" />
            <p className="text-petrol-1000 text-lg leading-7 font-semibold">
              {title}
            </p>
          </div>
        }
      >
        <div
          className={cn("mt-4", inputVariants({ className }))}
          ref={ref}
          {...props}
        >
          {props.children}
        </div>
      </CollapsibleContainer>
    );
  }
);
