import type { WeekProps } from './Week'
import React from 'react'
import { Radio, Space, Select, InputNumber, Row, Col } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { weekOptions } from './Week'
import Language from '../language'
import styles from './ReactCron.less'
const text = Language.cn

export type DayProps = {
  value: any
  onChange?: (value: number[] | number, filedKey: string) => void
  children?: React.ReactElement<WeekProps>
}

const Day: React.FC<DayProps> = (props) => {
  const dayOptions = new Array(31).fill(0).map((value, index) => ({
    value: index + 1
  }))

  const onChangeType = (e: RadioChangeEvent) => {
    if (props.onChange) {
      props.onChange(e.target.value, 'cronEvery')
    }
  }

  const onChangeInput = (value: number, filedKey: string) => {
    if (props.onChange) {
      props.onChange(value, filedKey)
    }
  }

  const onChangeDay = (value: number[] | number) => {
    if (props.onChange) {
      props.onChange(value, 'specificSpecific')
    }
  }

  return (
    <div className={styles.tabContent}>
      <Radio.Group onChange={onChangeType} value={props.value.cronEvery}>
        <Space direction="vertical">
          <Radio value={1}>{text.Day.every}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Day.intervalDay[0]}
              </span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={1}
                max={31}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className={styles.optionLabel}>
                {text.Day.intervalDay[1]}
              </span>
              <InputNumber
                value={props.value.incrementStart}
                min={1}
                max={31}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className={styles.optionLabel}>
                {text.Day.intervalDay[2]}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{text.Day.specificDay}</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: 280 }}
                value={props.value.specificSpecific}
                options={dayOptions}
                onChange={onChangeDay}
              />
            </Col>
          </Row>
          <Radio value={4}>{text.Day.lastDay}</Radio>
          <Radio value={5}>{text.Day.lastWorkDay}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={6}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Day.beforeEndMonth[0]}
              </span>
              <InputNumber
                value={props.value.cronDaysBeforeEomMinus}
                min={1}
                max={31}
                onChange={(value) =>
                  onChangeInput(value, 'cronDaysBeforeEomMinus')
                }
              />
              <span className={styles.optionLabel}>
                {text.Day.beforeEndMonth[1]}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={7}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Day.nearestWeekday[0]}
              </span>
              <InputNumber
                value={props.value.cronDaysNearestWeekday}
                min={1}
                max={31}
                onChange={(value) =>
                  onChangeInput(value, 'cronDaysNearestWeekday')
                }
              />
              <span className={styles.optionLabel}>
                {text.Day.nearestWeekday[1]}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={8}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{text.Day.lastWeek[0]}</span>
              <Select
                allowClear
                style={{ width: 280 }}
                value={props.value.cronLastSpecificDomDay}
                options={weekOptions}
                onChange={(value) =>
                  onChangeInput(value, 'cronLastSpecificDomDay')
                }
              />
              <span className={styles.optionLabel}>{text.Day.lastWeek[1]}</span>
            </Col>
          </Row>
        </Space>
        {props.children}
      </Radio.Group>
    </div>
  )
}

export default Day
