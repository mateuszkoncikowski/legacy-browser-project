import { Input } from "@/components/ui/Input";
import { Settings2 } from "lucide-react";
import { Card } from "./ui/Card";

export const ParameterSettings = () => {
  return (
    <Card icon={Settings2} title="Parameter Settings">
      <div className="flex items-center justify-between pr-8 mb-6">
        <p className="text-sm font-normal leading-5 text-petrol-800">
          Measurement mode
        </p>
      </div>
      <div className="flex items-center justify-between pr-8 mb-6">
        <p className="text-sm font-normal leading-5 text-petrol-800">
          Frequency
        </p>
        <Input type="text" size="md" />
      </div>
      <div className="flex items-center justify-between ">
        <p className="text-sm font-normal leading-5 text-petrol-800">
          Modulation current
        </p>
        <div className="flex items-center gap-2">
          <Input type="text" size="sm" />
          <p className="w-6 text-sm font-normal leading-5 text-petrol-800">A</p>
        </div>
      </div>
    </Card>
  );
};
