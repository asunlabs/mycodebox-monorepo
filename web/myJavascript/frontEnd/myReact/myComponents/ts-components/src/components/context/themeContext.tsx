import * as React from 'react';
import { createContext } from 'react'
import { theme } from './theme'

export const ThemeContext = createContext(theme)

export type ThemeContextProviderProps = {
    children : React.ReactNode
}

export function ThemeContextProvider ( { children }: ThemeContextProviderProps) {
  return (
    <div>
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    </div>
  );
}
