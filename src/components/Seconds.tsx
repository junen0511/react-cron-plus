import type { RadioChangeEvent } from 'antd';
import { Col, InputNumber, Radio, Row, Select, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.less';

export type SecondsProps = {
  value: any;
  onChange?: (value: number[] | number, filedKey: string) => void;
};

const Seconds: React.FC<SecondsProps> = (props) => {
  const { t } = useTranslation();
  const secondsOptions = new Array(60).fill(0).map((value, index) => ({
    value: index,
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

  const onChangeSecond = (value: number[] | number) => {
    if (props.onChange) {
      props.onChange(value, 'specificSpecific');
    }
  };

  return (
    <div className="tabContent">
      <Radio.Group onChange={onChangeType} value={props.value.cronEvery}>
        <Space direction="vertical">
          <Radio value={1}>{t('Seconds.every')}</Radio>
          <Row align="middle">
            <Col>
              <Radio value={2}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Seconds.interval.0')}</span>
              <InputNumber
                value={props.value.incrementIncrement}
                min={1}
                max={60}
                onChange={(value) => onChangeInput(value, 'incrementIncrement')}
              />
              <span className="optionLabel">{t('Seconds.interval.1')}</span>
              <InputNumber
                value={props.value.incrementStart}
                min={0}
                max={59}
                onChange={(value) => onChangeInput(value, 'incrementStart')}
              />
              <span className="optionLabel">
                {t('Seconds.interval.2') || ''}
              </span>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <Radio value={3}></Radio>
            </Col>
            <Col>
              <span className="optionLabel">{t('Seconds.specific')}</span>
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
              <span className="optionLabel">{t('Seconds.cycle.0')}</span>
              <InputNumber
                value={props.value.rangeStart}
                min={1}
                max={60}
                onChange={(value) => onChangeInput(value, 'rangeStart')}
              />
              <span className="optionLabel">{t('Seconds.cycle.1')}</span>
              <InputNumber
                value={props.value.rangeEnd}
                min={0}
                max={59}
                onChange={(value) => onChangeInput(value, 'rangeEnd')}
              />
              <span className="optionLabel">{t('Seconds.cycle.2')}</span>
            </Col>
          </Row>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default Seconds;
