import { createContext, useEffect, useState } from "react";
import { onSalesChangedListener } from "../firebase-utils";

export const SalesContext = createContext({
  currentSales: null,
  setCurrentSales: () => null
})

export const SalesProvider = ({children}) => {

  const [sales, setSales] = useState({});
  const value = {sales, setSales}

  useEffect(() => {
    const unsubscribe = onSalesChangedListener((snapshot) => {
      console.log(snapshot)
    })
  })

  return <SalesContext.Provider value={value}>{children}</SalesContext.Provider>
}