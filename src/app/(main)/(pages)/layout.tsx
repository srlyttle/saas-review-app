import InfoBar from '@/components/infobar'
import Sidebar from '@/components/sidebar'
import { Metadata } from 'next'
import React from 'react'

type Props = { children: React.ReactNode }

export const metadata: Metadata = {
  title: 'Review mee - Dashboard',
  description: 'Dashboard for managing reviews',
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen overflow-scroll rounded-l-3xl border-l-[1px] border-t-[1px] border-muted-foreground/20 pb-20 ">
      <Sidebar />

      <div className="flex flex-col">
        <InfoBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
