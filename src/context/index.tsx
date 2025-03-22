'use client'

import { useContext, createContext, useState } from "react"

type ViewType = 'list' | 'grid';

type AppContextType = {
    productFormShow: boolean;
    setProductFormShow: React.Dispatch<React.SetStateAction<boolean>>;
    view: ViewType
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

export const AppContext = createContext<AppContextType>({
    productFormShow: false,
    setProductFormShow: () => { },
    view: 'list',
    setView: () => { }

})

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const [productFormShow, setProductFormShow] = useState(false)
    const [view, setView] = useState<ViewType>('list')

    return (
        <AppContext.Provider value={{ productFormShow, setProductFormShow, view, setView }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (!context || context === null) throw Error("useAppContext must be used within an AppWrapper")
    return context
}