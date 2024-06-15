import { createContext, useState, useContext } from 'react';

export interface MenuContextInterface {
  menu: number;
  setMenu: (menu: number) => void;
}
// Create the context
const MenuContext = createContext<MenuContextInterface>({} as MenuContextInterface);



// Create a provider component
import { ReactNode } from 'react';

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(0);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = () => useContext(MenuContext);