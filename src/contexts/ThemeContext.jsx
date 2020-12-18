import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    ligth: {
      bg: '#f4f4',
      ui: '#b44',
      syntax: '#555'
    },
    dark: {
      bg: '#f3f',
      ui: '#333',
      syntax: '#ddd'
    }
  }

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}  >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
