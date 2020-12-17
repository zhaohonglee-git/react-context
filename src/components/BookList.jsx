import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends Component {

  static contextType = ThemeContext


  render() {

    const { isLight, light, dark } = this.context
    const theme = isLight ? light : dark
    console.log(theme, 'BookList组件通过context拿到的指定theme，打印测试****')

    return (
      <div className='book-list' style={{ color: theme.syntax, background: theme.bg }} >
        <ul>
          <li style={{ background: theme.ui }}>撒哈拉的故事</li>
          <li style={{ background: theme.ui }}>梦里花落知多少</li>
          <li>雨季不再来</li>
        </ul>
      </div>
    )
  }
}

export default BookList
