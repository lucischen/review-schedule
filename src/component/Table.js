import React, { Component } from 'react'
import { createCalendar } from '../utilities/compute'
import styles from './Table.css'

// const DEFAULT_INTERVALS = [ 0, 1, 3, 5, 7, 9 ]
const DEFAULT_INTERVALS = [ 0, 1, 3, 7, 14, 29 ]

export default class extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.total !== nextProps.total
    || this.props.daily !== nextProps.daily
  }

  render() {
    const { total, daily } = this.props
    const ar = createCalendar(DEFAULT_INTERVALS, total, daily)

    // 如果未來有超過高度的粕版， 再每13個一組包一層 div。
    const template = ar.map((v, k) => {
      return (
        <div key={k} className={styles.box}>
          <p className={styles.number}>{k}</p>
          <div>
            <ul>
              {v.map((v, k) => <li className={styles.list} key={k}>{v}</li>)}
            </ul>
          </div>
        </div>
      )
    })

    return (
      <div className={styles.container}>{template}</div>
    )
  }
}
