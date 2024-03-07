export interface SystemMenuResponse {
  menu: SystemMenu[];
}

export interface QueryVarResponse {
  vars: Var[];
}

export interface StateResponse {
  state: {
    icons: Icon[];
    timestamp: string;
    brightness: number;
    dimbrightness: number;
    dimdelay: number;
    language: number;
    autoLogoff: number;
    usb: boolean;
    restart: boolean;
    terminal: TerminalConfig;
    menu: MenuConfig;
    invalidate: [];
    menu_auto_close: MenuAutoCloseConfig;
    teststandnum: number;
    user_access_enabled: boolean;
    measurement: MeasurementData;
  };
}

export interface StringsResponse {
  strings: {
    [key: string]: string;
  };
}

export interface MeasurementData {
  ilevel: MeasurementChannel;
  ulevel: MeasurementChannel;
  progress: MeasurementProgress;
}

export interface MeasurementChannel {
  value: number;
  state: string;
  hint: string;
  link: string;
}

export interface MeasurementProgress {
  value: number;
  text: string;
  link: string;
  time: MeasurementTime;
}

export interface MeasurementTime {
  rest: number;
  estimated: number;
}

export interface Icon {
  url: string;
  idx: number;
  width: number;
}

export interface TerminalConfig {
  background: string;
}

export interface MenuConfig {
  reload: number;
}

export interface MenuAutoCloseConfig {
  enabled: boolean;
  time: number;
}

export interface Var {
  result: {
    code: number;
    text: string;
  };
  var: string;
  value: string;
  displayValue?: string;
  channel: number;
  type: string;
  visible: boolean;
  editable: boolean;
  valid: boolean;
  label: string;
  unit: string;
  min?: string;
  max?: string;
  items?: string[];
  itemsValue?: string[];
}

interface SystemMenu {
  id: string;
  title: string;
  image: string;
  items: MenuCategory[];
}

export interface MenuCategory {
  id: string;
  title: string;
  image: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  image: string;
  items: Cards[];
}

interface Cards {
  title: string;
  image: string;
  vars?: MenuItemVar[];
}

interface MenuItemVar {
  var: string;
  editable: boolean;
}

export interface WebAppStore {
  selectedMenuCategory: null | MenuCategory;
  selectedMenuItem: null | MenuItem;
  setSelectedCategory: (category: MenuCategory) => void;
  setSelectedMenuItem: (item: MenuItem) => void;
}

export interface StringsObject {
  [key: string]: string;
}
export interface StringsStore {
  strings: StringsObject;
  setStrings: (strings: StringsObject) => void;
}
