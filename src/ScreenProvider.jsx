import { createContext, useState } from "react";

export const ScreenContext = createContext();

function ScreenProvider({children}) {

  const [openNav, setOpenNav] = useState(false);
  return (
    <ScreenContext.Provider value={{openNav, setOpenNav}}>
      {children}
    </ScreenContext.Provider>
  )
}

export default ScreenProvider
