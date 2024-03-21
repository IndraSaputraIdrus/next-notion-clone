import MarketingFooter from '@/components/marketing-footer'
import MarketingNavbar from '@/components/marketing-navbar'
import React from 'react'

interface PageProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: PageProps) {
  return (
    <div className="flex flex-col h-full">
      <MarketingNavbar />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  )
}
