import React, { useState, useMemo } from 'react'
import { Button, Tabs, Space, Card } from 'antd'
import Language from '../language'
import defaultData from './defaultData'
import styles from './ReactCron.less'
import Seconds from './Seconds'
import Minutes from './Minutes'
import Hours from './Hours'
import Day from './Day'
import Week from './Week'
import Month from './Month'
import Year from './Year'

export type ReactCronProps = {
  onChange?: (value?: string) => void
  onClose?: () => void
}

const ReactCron: React.FC<ReactCronProps> = (props) => {
  const text = Language.cn
  const [exps, setExps] = useState(defaultData.exps)
  const [second, setSecond] = useState(defaultData.second)
  const [minute, setMinute] = useState(defaultData.minute)
  const [hour, setHour] = useState(defaultData.hour)
  const [day, setDay] = useState(defaultData.day)
  const [week, setWeek] = useState(defaultData.week)
  const [month, setMonth] = useState(defaultData.month)
  const [year, setYear] = useState(defaultData.year)
  //   const [output, setOutput] = useState(defaultData.output)

  // second/秒
  const onChangeSecond = (value: number[] | number, filedKey: string) => {
    setSecond({ ...second, [filedKey]: value })
  }

  const secondsText = useMemo(() => {
    let seconds = ''
    let cronEvery = second.cronEvery
    switch (cronEvery) {
      case 1:
        seconds = '*'
        break
      case 2:
        seconds = second.incrementStart + '/' + second.incrementIncrement
        break
      case 3:
        if (Array.isArray(second.specificSpecific)) {
          seconds = second.specificSpecific.join(',')
        }
        break
      case 4:
        seconds = second.rangeStart + '-' + second.rangeEnd
        break
    }
    return seconds
  }, [second])

  // minute/分
  const onChangeMinute = (value: number[] | number, filedKey: string) => {
    setMinute({ ...minute, [filedKey]: value })
  }

  const minutesText = useMemo(() => {
    let minutes = ''
    let cronEvery = minute.cronEvery
    switch (cronEvery) {
      case 1:
        minutes = '*'
        break
      case 2:
        minutes = minute.incrementStart + '/' + minute.incrementIncrement
        break
      case 3:
        if (Array.isArray(minute.specificSpecific)) {
          minutes = minute.specificSpecific.join(',')
        }
        break
      case 4:
        minutes = minute.rangeStart + '-' + minute.rangeEnd
        break
    }
    return minutes
  }, [minute])

  // hour/时
  const onChangeHour = (value: number[] | number, filedKey: string) => {
    setHour({ ...hour, [filedKey]: value })
  }

  const hoursText = useMemo(() => {
    let hours = ''
    let cronEvery = hour.cronEvery
    switch (cronEvery) {
      case 1:
        hours = '*'
        break
      case 2:
        hours = hour.incrementStart + '/' + hour.incrementIncrement
        break
      case 3:
        if (Array.isArray(hour.specificSpecific)) {
          hours = hour.specificSpecific.join(',')
        }
        break
      case 4:
        hours = hour.rangeStart + '-' + hour.rangeEnd
        break
    }
    return hours
  }, [hour])

  // day/天
  const onChangeDay = (value: number[] | number, filedKey: string) => {
    setDay({ ...day, [filedKey]: value })
  }

  const daysText = useMemo(() => {
    let days = ''
    let cronEvery = day.cronEvery
    switch (cronEvery) {
      case 1:
        days = '*'
        break
      case 2:
        days = day.incrementStart + '/' + day.incrementIncrement
        break
      case 3:
        if (Array.isArray(day.specificSpecific)) {
          days = day.specificSpecific.join(',')
        }
        break
      case 4:
        days = 'L'
        break
      case 5:
        days = 'LW'
        break
      case 6:
        days = 'L-' + day.cronDaysBeforeEomMinus
        break
      case 7:
        days = day.cronDaysNearestWeekday + 'W'
        break
      case 8:
        days = day.cronLastSpecificDomDay + 'L'
        break
      default:
        days = '?'
        break
    }
    return days
  }, [day])

  // week/周
  const onChangeWeek = (value: number[] | number, filedKey: string) => {
    setWeek({ ...week, [filedKey]: value })
  }

  const onSelectWeek = (value: string[] | string) => {
    setWeek({ ...week, specificSpecific: value })
  }

  const weeksText = useMemo(() => {
    let weeks = ''
    let cronEvery = day.cronEvery
    switch (cronEvery) {
      case 9:
        weeks = week.incrementStart + '/' + week.incrementIncrement
        break
      case 10:
        if (Array.isArray(week.specificSpecific)) {
          weeks = week.specificSpecific.join(',')
        }
        break
      case 11:
        weeks = week.cronNthDayDay + '#' + week.cronNthDayNth
        break
      default:
        weeks = '?'
        break
    }
    return weeks
  }, [week, day.cronEvery])

  // month/月
  const onChangeMonth = (value: number[] | number, filedKey: string) => {
    setMonth({ ...month, [filedKey]: value })
  }

  const monthsText = useMemo(() => {
    let months = ''
    let cronEvery = month.cronEvery
    switch (cronEvery) {
      case 1:
        months = '*'
        break
      case 2:
        months = month.incrementStart + '/' + month.incrementIncrement
        break
      case 3:
        if (Array.isArray(month.specificSpecific)) {
          months = month.specificSpecific.join(',')
        }
        break
      case 4:
        months = month.rangeStart + '-' + month.rangeEnd
        break
    }
    return months
  }, [month])

  // year/月
  const onChangeYear = (value: number[] | number, filedKey: string) => {
    setYear({ ...year, [filedKey]: value })
  }

  const yearsText = useMemo(() => {
    let years = ''
    let cronEvery = year.cronEvery
    switch (cronEvery) {
      case 1:
        years = '*'
        break
      case 2:
        years = year.incrementStart + '/' + year.incrementIncrement
        break
      case 3:
        if (Array.isArray(year.specificSpecific)) {
          years = year.specificSpecific.join(',')
        }
        break
      case 4:
        years = year.rangeStart + '-' + year.rangeEnd
        break
    }
    return years
  }, [year])

  const cron = useMemo(
    () =>
      `${secondsText || '*'} ${minutesText || '*'} ${hoursText || '*'} ${
        daysText || '*'
      } ${monthsText || '*'} ${weeksText || '?'} ${yearsText || '*'}`,
    [
      secondsText,
      minutesText,
      hoursText,
      daysText,
      monthsText,
      weeksText,
      yearsText
    ]
  )

  const tabItems = [
    {
      label: text.Seconds.name,
      key: '1',
      children: <Seconds value={second} onChange={onChangeSecond} />
    },
    {
      label: text.Minutes.name,
      key: '2',
      children: <Minutes value={minute} onChange={onChangeMinute} />
    },
    {
      label: text.Hours.name,
      key: '3',
      children: <Hours value={hour} onChange={onChangeHour} />
    },
    {
      label: text.Day.name,
      key: '4',
      children: (
        <Day value={day} onChange={onChangeDay}>
          <Week value={week} onChange={onChangeWeek} onSelect={onSelectWeek} />
        </Day>
      )
    },
    {
      label: text.Month.name,
      key: '5',
      children: <Month value={month} onChange={onChangeMonth} />
    },
    {
      label: text.Year.name,
      key: '6',
      children: <Year value={year} onChange={onChangeYear} />
    }
  ]

  return (
    <div className={styles.cronContainer}>
      <Card size="small">
        <Tabs defaultActiveKey="1" items={tabItems} />
      </Card>
      <div className={styles.control}>
        <Space align="center">
          <span className={styles.result}>{cron}</span>
          <Button
            type="primary"
            onClick={() => {
              if (props.onChange) {
                props.onChange(cron)
              }
            }}
          >
            {text.Save}
          </Button>
          <Button type="primary" onClick={props.onClose}>
            {text.Close}
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default ReactCron
