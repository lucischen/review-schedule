import React from 'react'
import Table from '../component/Table'
import SearchBar from '../component/SearchBar'
import styles from './App.css'

export default class extends React.Component {
  constructor() {
    super()

    this.state = {
      total: 100,
      daily: 2
    }

    this.chagneTotal = this.onChange.bind(this, 'total')
    this.chagneDaily = this.onChange.bind(this, 'daily')
  }

  onChange(type, e) {
    if (e.target.value.match(/^\d*$/) || e.target.value === '') {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {

    const { total, daily } = this.state

    const props = { total, daily }

    return (
      <div>
        <p className={styles.title}>Review Calendar</p>
        <SearchBar
          {...props}
          changeTotal={this.chagneTotal}
          changeDaily={this.chagneDaily}
        />
        <Table {...props} />
      </div>

    )
  }
}
