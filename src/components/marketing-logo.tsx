import Link from "next/link";
import { cn } from "@/lib/utils"

export default function MarketingLogo({
  className
}: {
  className?: string
}) {
  return (
    <Link className={cn("font-semibold text-lg hover:text-muted-foreground", className)} href="/">Indotion</Link>
  )
}
