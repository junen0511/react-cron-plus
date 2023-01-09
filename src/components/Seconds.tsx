import React from 'react'
import { Radio, Space, Select, InputNumber, Row, Col } from 'antd'
import type { RadioChangeEvent } from 'antd'
import Language from '../language'
import styles from './ReactCron.less'
const text = Language.cn

export type SecondsProps = {
  value: any
  onChange?: (value: number[] | number, filedKey: string) => void
}

const Seconds: React.FC<SecondsProps> = (props) => {
  const secondsOptions = new Array(60).fill(0).map((value, index) => ({
    value: index,
    label: index
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
        <Space direction="vertical" align="baseline">
          <Radio value={1}>{text.Seconds.every}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Seconds.interval[0]}
              </span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={1}
                max={60}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className={styles.optionLabel}>
                {text.Seconds.interval[1] || ''}
              </span>
              <InputNumber
                value={props.value.incrementStart}
                min={0}
                max={59}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className={styles.optionLabel}>
                {text.Seconds.interval[2] || ''}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Seconds.specific}
              </span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: 280 }}
                value={props.value.specificSpecific}
                options={secondsOptions}
                onChange={onChangeSecond}
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={4}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>
                {text.Seconds.cycle[0]}
              </span>
              <InputNumber
                value={props.value.rangeStart}
                min={1}
                max={60}
                onChange={(value) => onChangeInput(value, 'rangeStart')}
              />
              <span className={styles.optionLabel}>
                {text.Seconds.cycle[1] || ''}
              </span>
              <InputNumber
                value={props.value.rangeEnd}
                min={0}
                max={59}
                onChange={(value) => onChangeInput(value, 'rangeEnd')}
              />
              <span className={styles.optionLabel}>
                {text.Seconds.cycle[2] || ''}
              </span>
            </Col>
          </Row>
        </Space>
      </Radio.Group>
    </div>
  )
}

export default Seconds
