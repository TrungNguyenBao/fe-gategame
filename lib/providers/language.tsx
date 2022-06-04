import { createContext, useContext } from "react"

export const LanguageContext = createContext<{
    lang?: string
}>({})
export const useLanguage = () => useContext(LanguageContext)