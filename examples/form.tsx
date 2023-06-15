/**
 * title: 案例二
 * description: 配合 Antd Form 和 Popover 使用
 */

import { Form, Input, Popover } from 'antd';
import React, { useState } from 'react';
import CronPlus from 'react-cron-plus';
export default () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const onOkaCron = (value: any) => {
    form.setFieldValue('cron', value);
    setOpen(false);
  };

  return (
    <>
      <Form form={form}>
        <Form.Item label="Cron" name="cron">
          <Input
            addonAfter={
              <Popover
                trigger="click"
                open={open}
                content={
                  <CronPlus
                    value={form.getFieldValue('cron')}
                    result="normal"
                    onOk={onOkaCron}
                    onCancel={() => handleOpenChange(false)}
                  />
                }
                onOpenChange={handleOpenChange}
              >
                <span style={{ cursor: 'pointer' }}>生成表达式</span>
              </Popover>
            }
          />
        </Form.Item>
      </Form>
    </>
  );
};
