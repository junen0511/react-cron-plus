import React, { useState, useMemo } from 'react'
import { Button, Tabs, Space, Card } from 'antd'
import Language from '../language'
import defaultData from './defaultData'
import styles from './ReactCron.less'
import Seconds from './Seconds'
import Minutes from './Minutes'
import Hours from './Hours'

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
  //   const [day, setDay] = useState(defaultData.day)
  //   const [week, setWeek] = useState(defaultData.week)
  //   const [month, setMonth] = useState(defaultData.month)
  //   const [year, setYear] = useState(defaultData.year)
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

  const cron = useMemo(
    () => `${secondsText || '*'} ${minutesText || '*'} ${hoursText || '*'}`,
    [secondsText, minutesText, hoursText]
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
