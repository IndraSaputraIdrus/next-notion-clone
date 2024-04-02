"use client"

import { ChevronsLeftIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"
import { usePathname } from "next/navigation"
import { useNavStore } from "@/lib/stores/nav-store"
import ToggleNav from "./main-sidebar-toggle"
import UserItem from "./main-sidebar-user"
import MainSidebarItem from "./main-sidebar-items"

export default function MainSidebar() {

  const { isCollapsed, setIsCollapsed } = useNavStore()
  const sidebarRef = useRef<HTMLElement>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const pathname = usePathname()

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
    event.stopPropagation()

    if (!sidebarRef.current) return

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  function handleMouseMove(event: MouseEvent) {

    if (!sidebarRef.current) return

    let newWidth = event.clientX

    if (newWidth < 240) {
      newWidth = 240
    } else if (newWidth > 400) {
      newWidth = 400
    }

    sidebarRef.current.style.transitionProperty = "none"

    sidebarRef.current.style.width = `${newWidth}px`
  }

  function handleMouseUp() {
    if (!sidebarRef.current) return
    sidebarRef.current.style.transitionProperty = "all"

    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mousedown", handleMouseUp)
  }

  function resetWidth() {
    if (!sidebarRef.current) return

    sidebarRef.current.style.width = '240px'
  }


  useEffect(() => {
    if (isMobile && sidebarRef.current) {
      setIsCollapsed()
      sidebarRef.current.style.width = "100%"
    } else {
      resetWidth()
    }
  }, [isMobile, sidebarRef, setIsCollapsed])

  useEffect(() => {
    if (isMobile && pathname) {
      setIsCollapsed()
    }
  }, [pathname, isMobile, setIsCollapsed])

  useEffect(() => {
    if (!isMobile && isCollapsed) {
      setIsCollapsed()
    }
  }, [isMobile, setIsCollapsed, isCollapsed])

  return (
    <aside ref={sidebarRef} className={cn(
      "w-full sm:w-60",
      "bg-secondary",
      "group/sidebar",
      "absolute inset-0 sm:relative z-[9999]",
      "flex justify-between",
      "transition-all ease-in-out duration-300",
      isCollapsed && "-left-full"
    )}>
      <div className="w-full flex flex-col items-start">
        <UserItem />
        <MainSidebarItem />
      </div>
      <button onClick={resetWidth}
        className="hidden sm:block transition opacity-0 group-hover/sidebar:opacity-100 absolute top-4 right-3 hover:bg-neutral-300 rounded">
        <ChevronsLeftIcon className="size-6 text-muted-foreground" />
      </button>
      <ToggleNav className="sm:hidden absolute top-3 right-3 hover:bg-neutral-300 rounded">
        <ChevronsLeftIcon className="size-6 text-muted-foreground" />
      </ToggleNav>
      <div
        onMouseDown={handleMouseDown}
        className={cn(
          "hidden sm:block",
          "transition opacity-0 group-hover/sidebar:opacity-100",
          "bg-primary/20",
          "w-1 h-full",
          "absolute right-0 top-0",
          "cursor-ew-resize"
        )} />
    </aside>
  )
}
