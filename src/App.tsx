import React, { useState } from 'react'
import { Input, Popover, Space } from 'antd'
import ReactCron from './components/ReactCron'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [cron, setCron] = useState('* * * * * ? *')

  const onOkaCron = (value: any) => {
    setCron(value)
    setOpen(false)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  return (
    <Space style={{ margin: '50px 0 0 50px' }} align="center">
      <Popover
        placement="topLeft"
        trigger="click"
        open={open}
        content={
          <ReactCron
            onOka={onOkaCron}
            value={cron}
            onCancel={() => handleOpenChange(false)}
          />
        }
        onOpenChange={handleOpenChange}
      >
        <Input
          style={{ width: 300 }}
          value={cron}
          placeholder="* * * * * ? *"
        />
      </Popover>
    </Space>
  )
}

export default App
