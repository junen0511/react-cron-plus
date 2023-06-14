import React, { useState } from 'react'
import { Input, Popover } from 'antd'
import CronPlus from '../index'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [cron, setCron] = useState('')

  const onOkaCron = (value: any) => {
    setCron(value)
    setOpen(false)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  return (
    <div className="app-container">
      <Popover
        trigger="click"
        open={open}
        content={
          <CronPlus
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
    </div>
  )
}

export default App
