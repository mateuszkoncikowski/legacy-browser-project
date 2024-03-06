import {
  Crosshair,
  Database,
  LayoutDashboard,
  PanelLeftClose,
  Ruler,
  Settings,
  Settings2,
  TrendingUp,
} from "lucide-react";
import { ParameterSettings } from "./components/ParameterSettings";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <div className="flex w-full h-screen text-neutrals-1000 bg-neutrals-200">
      <nav className="flex flex-col w-56 px-2 py-6 text-neutrals-100 bg-petrol-600">
        <div className="flex items-center justify-between w-full px-4">
          <Button variant="ghost" size="icon">
            <PanelLeftClose className="text-turquoise-600" />
          </Button>
        </div>
        <div className="w-full h-px bg-[#F1F5F9] my-6 text-neutrals-100" />
        <div className="flex flex-col justify-between h-full">
          <ul>
            <li className="flex px-4 my-2">
              <LayoutDashboard
                width={24}
                height={24}
                className="mr-1 text-turquoise-300"
              />
              Dashboard
            </li>
            <li className="flex px-4 my-2">
              <Settings2
                width={24}
                height={24}
                className="mr-1 text-turquoise-600"
              />
              Test Setup
            </li>
            <li className="flex px-4 my-2">
              <Crosshair
                width={24}
                height={24}
                className="mr-1 text-turquoise-600"
              />
              Calibration
            </li>
            <li className="flex px-4 my-2">
              <Ruler
                width={24}
                height={24}
                className="mr-1 text-turquoise-600"
              />
              Measurement
            </li>
            <li className="flex px-4 my-2">
              <TrendingUp
                width={24}
                height={24}
                className="mr-1 text-turquoise-600"
              />
              Trend
            </li>
            <li className="flex px-4 my-2">
              <Database
                width={24}
                height={24}
                className="mr-1 text-turquoise-600"
              />
              Measurement Data
            </li>
          </ul>
          <ul>
            <li className="flex px-4 my-2">
              <Settings
                width={24}
                height={24}
                className="mr-1 text-turquoise-600"
              />
              Configuration
            </li>
          </ul>
        </div>
        <div className="w-full h-px bg-[#F1F5F9] my-2 text-neutrals-100" />
        <div className="flex items-center justify-center bg-white rounded-full size-10">
          <span className="text-neutrals-1000">RH</span>
        </div>
      </nav>
      <main>
        <div className="p-2">
          <ParameterSettings />
        </div>
      </main>
    </div>
  );
}

export default App;
