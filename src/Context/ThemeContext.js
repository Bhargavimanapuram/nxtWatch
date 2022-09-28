import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: true,
  onClickTheme: () => {},
  savedVideosList: [],
  addToSavedList: () => {},
})

export default ThemeContext
