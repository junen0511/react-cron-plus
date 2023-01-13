import React from 'react'
import { Radio, Space, Select, InputNumber, Row, Col } from 'antd'
import type { RadioChangeEvent } from 'antd'
import Language from '../../language'
import styles from '../ReactCron.less'
const text = Language.cn

export type MinutesProps = {
  value: any
  onChange?: (value: number[] | number, filedKey: string) => void
}

const Minutes: React.FC<MinutesProps> = (props) => {
  const MinutesOptions = new Array(60).fill(0).map((value, index) => ({
    value: index
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

  const onChangeMinute = (value: number[] | number) => {
    if (props.onChange) {
      props.onChange(value, 'specificSpecific')
    }
  }

  return (
    <div className={styles.tabContent}>
      <Radio.Group onChange={onChangeType} value={props.value.cronEvery}>
        <Space direction="vertical">
          <Radio value={1}>{text.Minutes.every}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Minutes.interval[0]}
              </span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={1}
                max={60}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className={styles.optionLabel}>
                {text.Minutes.interval[1] || ''}
              </span>
              <InputNumber
                value={props.value.incrementStart}
                min={0}
                max={59}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className={styles.optionLabel}>
                {text.Minutes.interval[2] || ''}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Minutes.specific}
              </span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: 280 }}
                value={props.value.specificSpecific}
                options={MinutesOptions}
                onChange={onChangeMinute}
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={4}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Minutes.cycle[0]}
              </span>
              <InputNumber
                value={props.value.rangeStart}
                min={1}
                max={60}
                onChange={(value) => onChangeInput(value, 'rangeStart')}
              />
              <span className={styles.optionLabel}>
                {text.Minutes.cycle[1] || ''}
              </span>
              <InputNumber
                value={props.value.rangeEnd}
                min={0}
                max={59}
                onChange={(value) => onChangeInput(value, 'rangeEnd')}
              />
              <span className={styles.optionLabel}>
                {text.Minutes.cycle[2] || ''}
              </span>
            </Col>
          </Row>
        </Space>
      </Radio.Group>
    </div>
  )
}

export default Minutes
