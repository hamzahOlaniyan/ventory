'use client'

import { useContext, createContext, useState } from "react"

type AppContextType = {
    productFormShow: boolean
    setProductFormShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
    productFormShow: false,
    setProductFormShow: () => { }
})

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const [productFormShow, setProductFormShow] = useState(false)
    return (
        <AppContext.Provider value={{ productFormShow, setProductFormShow }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (!context || context === null) throw Error("useAppContext must be used within an AppWrapper")
    return context
}