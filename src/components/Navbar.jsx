import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Navbar extends Component {
  static contextType = ThemeContext

  render() {
    console.log(this.context)
    // 结构数据
    const { isLigthTheme, light, dark } = this.context
    const theme = isLigthTheme ? light : dark
    console.log(theme,'Navbar组件通过context拿到的指定theme，打印测试****')
    return (
      <div>
        <nav style={{ background: theme.ui, color: theme.syntax }}>
          <h1>Contextapp</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
}
