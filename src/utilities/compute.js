
// 1, [1, 2], [2, 3], [1, 3, 4]
// 1-3, [1-3, 4-6], [4-6, 7-9], [1-3, 7-9, 10-12]
const DEFAULT_INTERVALS = [ 0, 1, 3, 5, 7, 9 ]

const TOTAL_UNIT = 100
const DAILY_UNIT = 1

const isArray = (obj) => {
  return Array.isArray(obj)
}

const isValid = (v) => {
  return v > 0 && v < 999
}

const createCalendar = (intervals, total, daily) => {
  const calendar = []
  const totalUnit = Number(total)
  const dailyUnit = Number(daily)

  if (!isValid(totalUnit) || !isValid(dailyUnit)) {
    return calendar
  }

  const totalDays = Math.ceil(totalUnit / dailyUnit)
  const maxIntervals = intervals.length

  let isFirstDay = true

  // flag = 1 是由於起始為第 1 天而不是第 0 天
  for (let flag = 1; flag < totalDays + 1; flag++) {
    const endUnit = dailyUnit * flag
    const isLastUnit = totalUnit <= dailyUnit
    // +1 起始時間才會正確
    const startUnit = endUnit - dailyUnit + 1

    let unitInterval = `${startUnit}-${endUnit}`

    if (endUnit >= totalUnit) {
      unitInterval = `${startUnit}-${totalUnit}`

      if (startUnit === totalUnit) {
        unitInterval = `${totalUnit}`
      }
    }

    if (isFirstDay) {
      unitInterval = `1-${endUnit}`
      isFirstDay = false

      if (isLastUnit) {
        unitInterval = `1-${totalUnit}`
      }
    }

    // 解決基數偶數問題
    if (isLastUnit) {
      unitInterval = `${startUnit}-${totalUnit}`
    }

    // 屬於條件：當每日進度為 1 時，當天新進度就只有該日
    if (dailyUnit === 1) {
      unitInterval = `${flag}`
    }

    for (let index = 0; index < maxIntervals; index++) {
      const xDay = flag + intervals[index]
      if (isArray(calendar[xDay])) {
        calendar[xDay].push(unitInterval)
      } else {
        calendar[xDay] = [ unitInterval ]
      }
    }
  }

  return calendar
}

export { createCalendar }
