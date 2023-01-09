import React, { useState, useMemo } from 'react'
import { Button, Tabs, Space, Card } from 'antd'
import Language from '../language'
import defaultData from './defaultData'
import styles from './ReactCron.less'
import Seconds from './Seconds'

export type ReactCronProps = {
  onChange?: (value?: string) => void
  onClose?: () => void
}

const ReactCron: React.FC<ReactCronProps> = (props) => {
  const text = Language.cn
  const [exps, setExps] = useState(defaultData.exps)
  const [second, setSecond] = useState(defaultData.second)
  //   const [minute, setMinute] = useState(defaultData.minute)
  //   const [hour, setHour] = useState(defaultData.hour)
  //   const [day, setDay] = useState(defaultData.day)
  //   const [week, setWeek] = useState(defaultData.week)
  //   const [month, setMonth] = useState(defaultData.month)
  //   const [year, setYear] = useState(defaultData.year)
  //   const [output, setOutput] = useState(defaultData.output)

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

  const cron = useMemo(() => `${secondsText || '*'}`, [secondsText])

  const tabItems = [
    {
      label: text.Seconds.name,
      key: '1',
      children: <Seconds value={second} onChange={onChangeSecond} />
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
