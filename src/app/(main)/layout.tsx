"use client"

import MainSidebar from "@/components/main-sidebar"
import Spinner from "@/components/spinner"
import { useConvexAuth } from "convex/react"
import { redirect } from "next/navigation"

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { isLoading, isAuthenticated } = useConvexAuth()

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center"><Spinner size="lg" /></div>
    )
  }

  if (!isAuthenticated) {
    return redirect("/")
  }

  return (
    <div className="flex flex-row h-full">
      <MainSidebar />
      <main className="flex-1 shrink-0">
        {children}
      </main>
    </div>
  )
}
