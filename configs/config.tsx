'use client'

import React, { ReactNode } from 'react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { antdTheme } from '@/configs/antd'

interface ConfigProps {
  children: ReactNode
}

export default function Config({ children }: ConfigProps) {
  return <AntdConfigProvider theme={antdTheme}>{children}</AntdConfigProvider>
}
