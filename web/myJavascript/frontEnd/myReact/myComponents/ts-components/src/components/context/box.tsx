import * as React from 'react'
import { ThemeContext } from './themeContext'

export const Box = () => {
    const theme = React.useContext(ThemeContext)
    return <div style={
        { 
            "backgroundColor" : theme.primary.main,
            "color" : theme.primary.text
        }
    }>Theme context</div>
}

