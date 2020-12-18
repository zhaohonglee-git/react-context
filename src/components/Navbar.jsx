import React, { Component } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Navbar extends Component {
  // 通过static获取上下文，第一种获取方式
  // static contextType = ThemeContext

  render() {
    // 使用consumer组件方法获取数据
    return (
      <AuthContext.Consumer>
        {(AuthContext) => (
          <ThemeContext.Consumer>
            {(ThemeContext) => {
              const { toggleAuth, isAuthenticated } = AuthContext
              const { isLigthTheme, light, dark } = ThemeContext
              const theme = isLigthTheme ? light : dark
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Contextapp</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? ('登陆') : ('登出')}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>

    )
  }
}
