import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.less';

export type ResultProps = {
  theme?: string | boolean;
  crontabValueObj: {
    second: string;
    minute: string;
    hour: string;
    day: string;
    month: string;
    week: string;
    year: string;
  };
};

const Result: React.FC<ResultProps> = (props) => {
  const { t } = useTranslation();
  const tabTitles = [
    t('Seconds.name'),
    t('Minutes.name'),
    t('Hours.name'),
    t('Day.name'),
    t('Month.name'),
    t('Week.name'),
    t('Year.name'),
  ];

  const [crontabValueString, setCrontabValueString] = useState('');
  const crontabValueStringFn = () => {
    let obj = props.crontabValueObj;
    let str =
      obj?.second +
      ' ' +
      obj?.minute +
      ' ' +
      obj?.hour +
      ' ' +
      obj?.day +
      ' ' +
      obj?.month +
      ' ' +
      obj?.week +
      (obj?.year === '' ? '' : ' ' + obj?.year);
    return str;
  };

  useEffect(() => {
    setCrontabValueString(crontabValueStringFn());
  }, [props.crontabValueObj]);

  return (
    <>
      {props.theme ? (
        props.theme === 'simple' ? (
          <p className="result">{crontabValueString}</p>
        ) : (
          <div className="popup-result">
            {/* <p className="title">时间表达式</p> */}
            <table>
              <thead>
                <tr>
                  {tabTitles.map((item) => (
                    <th key={item} className="thead-item">
                      {item}
                    </th>
                  ))}
                  <th>Cron</th>
                </tr>
              </thead>
              {props.crontabValueObj && (
                <tbody>
                  <tr>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.second}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.minute}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.hour}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.day}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.month}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.week}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">
                        {props.crontabValueObj.year}
                      </span>
                    </td>
                    <td>
                      <span className="tbody-item">{crontabValueString}</span>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        )
      ) : (
        ''
      )}
    </>
  );
};

export default Result;
