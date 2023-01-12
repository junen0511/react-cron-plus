import React from 'react'
import { Radio, Select, InputNumber, Row, Col, Space } from 'antd'
import Language from '../language'
import styles from './ReactCron.less'
const text = Language.cn

export type WeekProps = {
  value: any
  onChange?: (value: number[] | number, filedKey: string) => void
  onSelect?: (value: string[] | string) => void
}

export const weekOptions = new Array(7).fill(0).map((value, index) => ({
  value: index,
  label: text.Week[index]
}))

export const nthOptions = new Array(5).fill(0).map((value, index) => ({
  value: index + 1
}))

const Week: React.FC<WeekProps> = (props) => {
  const weekStrOptions = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(
    (value, index) => ({
      value,
      label: text.Week[index]
    })
  )

  const onChangeInput = (value: number, filedKey: string) => {
    if (props.onChange) {
      props.onChange(value, filedKey)
    }
  }

  const onSelectWeekDay = (value: string[] | string) => {
    if (props.onSelect) {
      props.onSelect(value)
    }
  }

  return (
    <Space direction="vertical"  style={{ marginTop: 15 }}>
      <Row align="middle">
        <Col>
          <Radio value={9}></Radio>
        </Col>
        <Col>
          <span className={styles.optionLabel}>{text.Day.intervalWeek[0]}</span>
          <InputNumber
            value={props.value.incrementIncrement}
            min={1}
            max={7}
            onChange={(value) => onChangeInput(value, 'incrementIncrement')}
          />
          <span className={styles.optionLabel}>
            {text.Day.intervalWeek[1] || ''}
          </span>
          <Select
            allowClear
            style={{ width: 280 }}
            value={props.value.incrementStart}
            options={weekOptions}
            onChange={(value) => onChangeInput(value, 'incrementStart')}
          />
          <span className={styles.optionLabel}>
            {text.Day.intervalWeek[2] || ''}
          </span>
        </Col>
      </Row>
      <Row align="middle">
        <Col>
          <Radio value={10}></Radio>
        </Col>
        <Col>
          <span className={styles.optionLabel}>{text.Day.specificWeek}</span>
          <Select
            mode="multiple"
            allowClear
            style={{ width: 280 }}
            value={props.value.specificSpecific}
            options={weekStrOptions}
            onChange={onSelectWeekDay}
          />
        </Col>
      </Row>
      <Row align="middle">
        <Col>
          <Radio value={11}></Radio>
        </Col>
        <Col>
          <span className={styles.optionLabel}>{text.Day.someWeekday[0]}</span>
          <Select
            allowClear
            style={{ width: 90, marginRight: 10 }}
            value={props.value.cronNthDayNth}
            options={nthOptions}
            onChange={(value) => onChangeInput(value, 'cronNthDayNth')}
          />

          <Select
            allowClear
            style={{ width: 280 }}
            value={props.value.cronNthDayDay}
            options={weekOptions}
            onChange={(value) => onChangeInput(value, 'cronNthDayDay')}
          />
          <span className={styles.optionLabel}>{text.Day.someWeekday[1]}</span>
        </Col>
      </Row>
    </Space>
  )
}

export default Week
