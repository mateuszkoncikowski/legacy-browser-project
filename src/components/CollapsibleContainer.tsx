import { Button } from "@/components/ui/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

type Props = React.PropsWithChildren<{
  headerComponent: React.ReactNode;
  isCollapsible?: boolean;
  className?: string;
}>;

export const CollapsibleContainer = ({
  headerComponent,
  isCollapsible,
  className,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(
        "space-y-2 bg-neutrals-100 rounded-lg p-4 w-[500px]",
        className
      )}
    >
      <div className="flex items-center justify-between w-full">
        {headerComponent}
        {isCollapsible ? (
          <CollapsibleTrigger>
            <Button
              variant="icon"
              size="icon"
              className="w-4 h-4 p-0 text-petrol-600"
            >
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}

              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        ) : null}
      </div>

      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};
