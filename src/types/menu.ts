export type Menu = {
  id: string;
  img: string;
  dsc: string;
  rate: number;
};

export type MenuCardProp = {
  menu: Menu;
};

export type MenuContextType = {
  menu: MenuItems;
  loading: boolean;
  error: string | null;
};

export type MenuItems = Menu[];
