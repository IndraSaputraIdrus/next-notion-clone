"use client"

import MainSidebar from "@/components/main-sidebar"
import Spinner from "@/components/spinner"
import { useConvexAuth } from "convex/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // const { isLoading, isAuthenticated } = useConvexAuth()

  // if (isLoading) {
  //   return (
  //     <div className="h-full flex items-center justify-center"><Spinner size="lg" /></div>
  //   )
  // }
  //
  // if (!isAuthenticated) {
  //   return redirect("/")
  // }

  return (
    <div className="flex flex-row h-full">
      <MainSidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
