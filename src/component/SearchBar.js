import React, { Component } from 'react'
import styles from './SearchBar.css'

export default class extends Component {
  constructor() {
    super()

    this.handleFocus = this.handleFocus.bind(this)
  }

  handleFocus(e) {
    e.target.select()
  }

  render() {
    const { changeTotal, changeDaily, total, daily } = this.props
    return (
      <div className={styles.box}>
        <div className={styles.inputBox}>
          <label className={styles.label}>Total Unit:</label>
          <input
            className={styles.input}
            onChange={changeTotal}
            value={total}
            type="text"
            onFocus={this.handleFocus}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>Daily:</label>
          <input
            className={styles.input}
            onChange={changeDaily}
            value={daily}
            type="text"
            onFocus={this.handleFocus}
          />
        </div>
      </div>
    )
  }
}
