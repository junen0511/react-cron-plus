import React from 'react'
import moment from 'moment'
import { Radio, Space, Select, InputNumber, Row, Col } from 'antd'
import type { RadioChangeEvent } from 'antd'
import styles from '../styles/index.less'
import { useTranslation } from 'react-i18next'

const maxRange = 20
const currentYear = moment().year()
const maxRangeYear = moment().add(maxRange, 'year').year()

export type YearProps = {
  value: any
  onChange?: (value: number[] | number, filedKey: string) => void
}

const Year: React.FC<YearProps> = (props) => {
  const { t } = useTranslation()
  const yearOptions = new Array(maxRange).fill(0).map((value, index) => ({
    value: moment().add(index, 'year').year()
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
          <Radio value={1}>{t('Year.every')}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{t('Year.interval.0')}</span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={1}
                max={maxRange}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className={styles.optionLabel}>{t('Year.interval.1')}</span>
              <InputNumber
                value={props.value.incrementStart}
                min={currentYear}
                max={maxRangeYear}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className={styles.optionLabel}>{t('Year.interval.2')}</span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{t('Year.specific')}</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: 260 }}
                value={props.value.specificSpecific}
                options={yearOptions}
                onChange={onChangeSecond}
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={4}></Radio>
            </Col>
            <Col>
              <span className={styles.optionLabel}>{t('Year.cycle.0')}</span>
              <InputNumber
                value={props.value.rangeStart}
                min={currentYear}
                max={maxRangeYear}
                onChange={(value) => onChangeInput(value, 'rangeStart')}
              />
              <span className={styles.optionLabel}>{t('Year.cycle.1')}</span>
              <InputNumber
                value={props.value.rangeEnd}
                min={currentYear}
                max={maxRangeYear}
                onChange={(value) => onChangeInput(value, 'rangeEnd')}
              />
              <span className={styles.optionLabel}>{t('Year.cycle.2')}</span>
            </Col>
          </Row>
        </Space>
      </Radio.Group>
    </div>
  )
}

export default Year
