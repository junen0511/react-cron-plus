import React from 'react'
import { Radio, Space, Select, InputNumber, Row, Col } from 'antd'
import type { RadioChangeEvent } from 'antd'
import Language from '../language'
import styles from './ReactCron.less'
const text = Language.cn

export type MonthProps = {
  value: any
  onChange?: (value: number[] | number, filedKey: string) => void
}

const Month: React.FC<MonthProps> = (props) => {
  const monthOptions = new Array(12).fill(0).map((value, index) => ({
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

  const onChangeSecond = (value: number[] | number) => {
    if (props.onChange) {
      props.onChange(value, 'specificSpecific')
    }
  }

  return (
    <div className={styles.tabContent}>
      <Radio.Group onChange={onChangeType} value={props.value.cronEvery}>
        <Space direction="vertical">
          <Radio value={1}>{text.Month.every}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Month.interval[0]}
              </span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={0}
                max={12}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className={styles.optionLabel}>
                {text.Month.interval[1] || ''}
              </span>
              <InputNumber
                value={props.value.incrementStart}
                min={0}
                max={12}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className={styles.optionLabel}>
                {text.Month.interval[2] || ''}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{text.Month.specific}</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: 280 }}
                value={props.value.specificSpecific}
                options={monthOptions}
                onChange={onChangeSecond}
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={4}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{text.Month.cycle[0]}</span>
              <InputNumber
                value={props.value.rangeStart}
                min={1}
                max={12}
                onChange={(value) => onChangeInput(value, 'rangeStart')}
              />
              <span className={styles.optionLabel}>
                {text.Month.cycle[1] || ''}
              </span>
              <InputNumber
                value={props.value.rangeEnd}
                min={1}
                max={12}
                onChange={(value) => onChangeInput(value, 'rangeEnd')}
              />
              <span className={styles.optionLabel}>
                {text.Month.cycle[2] || ''}
              </span>
            </Col>
          </Row>
        </Space>
      </Radio.Group>
    </div>
  )
}

export default Month
