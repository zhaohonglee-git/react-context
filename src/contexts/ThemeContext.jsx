import React, { createContext, Component } from 'react'

export const ThemeContext = React.createContext()


class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    ligth: {
      bg: '#eee',
      ui: '#ddd',
      syntax: '#555'
    },
    dark: {
      bg: '#f3f',
      ui: '#333',
      syntax: '#ddd'
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }} >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
