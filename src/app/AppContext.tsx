'use client'

import {
  createContext, useContext, useMemo, useState,
} from 'react'

export type AppContextValue = {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
} | null
export const AppContext = createContext<AppContextValue>(null)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState('Default title')
  const value = useMemo(
    () => ({
      title,
      setTitle,
    }),
    [title],
  )
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
