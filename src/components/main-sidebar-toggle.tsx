"use client"

import { useNavStore } from "@/lib/stores/nav-store"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function ToggleNav({ children, className }: Props) {
  const store = useNavStore()

  return (
    <button className={className} onClick={store.setIsCollapsed}>{children}</button>
  )
}
