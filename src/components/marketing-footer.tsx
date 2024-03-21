import React from 'react'
import MarketingLogo from '@/components/marketing-logo'
import { Button } from '@/components/ui/button'

export default function MarketingFooter() {
  return (
    <footer className="p-4 flex items-center">
      <MarketingLogo className="hidden md:block" />
      <div className="w-full flex items-center justify-between md:w-auto md:ml-auto">
        <Button size="sm" variant="link">
          Privacy Policy
        </Button>
        <Button size="sm" variant="link">
          Terms & Conditions
        </Button>
      </div>
    </footer>
  )
}
