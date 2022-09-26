import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: true,
  onClickTheme: () => {},
})

export default ThemeContext
