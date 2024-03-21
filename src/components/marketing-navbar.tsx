import MarketingLogo from "@/components/marketing-logo";
import { Button } from "@/components/ui/button";

export default function MarketingNavbar() {
  return (
    <header className="p-4 flex items-center justify-between" >
      <MarketingLogo />
      <div className="space-x-2">
        <Button size="sm" variant="outline">Login</Button>
        <Button size="sm" variant="outline">Register</Button>
      </div>
    </header>
  )
}
