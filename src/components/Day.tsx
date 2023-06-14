import type { RadioChangeEvent } from 'antd';
import { Col, InputNumber, Radio, Row, Select, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.less';
import { weekOptions, WeekProps } from './Week';

export type DayProps = {
  value: any;
  onChange?: (value: number[] | number, filedKey: string) => void;
  children?: React.ReactElement<WeekProps>;
};

const Day: React.FC<DayProps> = (props) => {
  const { t } = useTranslation();

  const dayOptions = new Array(31).fill(0).map((value, index) => ({
    value: index + 1,
  }));

  const onChangeType = (e: RadioChangeEvent) => {
    if (props.onChange) {
      props.onChange(e.target.value, 'cronEvery');
    }
  };

  const onChangeInput = (value: number, filedKey: string) => {
    if (props.onChange) {
      props.onChange(value, filedKey);
    }
  };

  const onChangeDay = (value: number[] | number) => {
    if (props.onChange) {
      props.onChange(value, 'specificSpecific');
    }
  };

  return (
    <div className="tabContent">
      <Radio.Group onChange={onChangeType} value={props.value.cronEvery}>
        <Space direction="vertical">
          <Radio value={1}>{t('Day.every')}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Day.intervalDay.0')}</span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={1}
                max={31}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className="optionLabel">{t('Day.intervalDay.1')}</span>
              <InputNumber
                value={props.value.incrementStart}
                min={1}
                max={31}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className="optionLabel">{t('Day.intervalDay.2')}</span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Day.specificDay')}</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: 240 }}
                value={props.value.specificSpecific}
                options={dayOptions}
                onChange={onChangeDay}
              />
            </Col>
          </Row>
          <Radio value={4}>{t('Day.lastDay')}</Radio>
          <Radio value={5}>{t('Day.lastWorkDay')}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={6}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Day.beforeEndMonth.0')}</span>
              <InputNumber
                value={props.value.cronDaysBeforeEomMinus}
                min={1}
                max={31}
                onChange={(value) =>
                  onChangeInput(value, 'cronDaysBeforeEomMinus')
                }
              />
              <span className="optionLabel">{t('Day.beforeEndMonth.1')}</span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={7}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Day.nearestWeekday.0')}</span>
              <InputNumber
                value={props.value.cronDaysNearestWeekday}
                min={1}
                max={31}
                onChange={(value) =>
                  onChangeInput(value, 'cronDaysNearestWeekday')
                }
              />
              <span className="optionLabel">{t('Day.nearestWeekday.1')}</span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={8}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Day.lastWeek.0')}</span>
              <Select
                allowClear
                style={{ width: 150 }}
                value={props.value.cronLastSpecificDomDay}
                options={weekOptions}
                onChange={(value) =>
                  onChangeInput(value, 'cronLastSpecificDomDay')
                }
              />
              <span className="optionLabel">{t('Day.lastWeek.1')}</span>
            </Col>
          </Row>
        </Space>
        {props.children}
      </Radio.Group>
    </div>
  );
};

export default Day;
