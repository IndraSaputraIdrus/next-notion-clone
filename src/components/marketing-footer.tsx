import React from 'react'
import MarketingLogo from '@/components/marketing-logo'
import { Button } from '@/components/ui/button'

export default function MarketingFooter() {
  return (
      <footer className="p-4 flex items-center">
        <MarketingLogo />
        <div className="ml-auto">
          <Button variant="link">
            Privacy Policy
          </Button>
          <Button variant="link">
            Terms & Conditions
          </Button>
        </div>
      </footer>
  )
}
