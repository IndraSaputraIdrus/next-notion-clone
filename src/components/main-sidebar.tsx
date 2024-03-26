"use client"

import { ChevronsLeftIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"
import { usePathname } from "next/navigation"

export default function MainSidebar() {

  const isMobile = useMediaQuery("(max-width: 768px)")
  const pathname = usePathname()

  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)

  const isResizingRef = useRef(false)
  const sidebarRef = useRef<React.ElementRef<"aside">>(null)
  const navbarRef = useRef<React.ElementRef<"div">>(null)

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
    event.stopPropagation()

    isResizingRef.current = true

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isResizingRef.current) return

    let newWidth = event.clientX

    if (newWidth < 240) {
      newWidth = 240
    } else if (newWidth > 400) {
      newWidth = 400
    }

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`
      navbarRef.current.style.setProperty("left", `${newWidth}px`)
      navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`)
    }
  }

  function handleMouseUp() {
    isResizingRef.current = false
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  function resetWidth() {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true)
      setIsResetting(true)
      sidebarRef.current.style.width = isMobile ? "100%" : "240px"
      navbarRef.current.style.setProperty("width", isMobile ? "0" : 'calc(100% - 240px)')
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px")

      setTimeout(() => setIsResetting(false), 300)
    }
  }

  function collapse() {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true)
      setIsResetting(true)

      sidebarRef.current.style.width = "0"
      navbarRef.current.style.setProperty("width", "100%")
      navbarRef.current.style.setProperty("left", "0")

      setTimeout(() => setIsResetting(false), 300)
    }
  }

  useEffect(() => {
    if (isMobile) {
      collapse()
    } else {
      resetWidth()
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) {
      collapse()
    }
  }, [isMobile, pathname])

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar bg-secondary",
          "h-full w-60 overflow-y-auto",
          "relative z-[99999]",
          "flex flex-col",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <button
          onClick={collapse}
          className={cn(
            "text-muted-foreground hover:bg-neutral-300",
            "rounded-sm",
            "size-6",
            "absolute top-3 right-2",
            "opacity-0 group-hover/sidebar:opacity-100",
            "transition",
            "flex items-center justify-center",
            isMobile && "opacity-100"
          )}>
          <ChevronsLeftIcon className="size-6" />
        </button>
        <div>
          <p>Actions items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>

        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className={cn(
            "opacity-0 group-hover/sidebar:opacity-100",
            "absolute right-0 top-0",
            "h-full w-1",
            "transition bg-primary cursor-ew-resize",
            "bg-primary/10"
          )} />
      </aside >
      <div ref={navbarRef} className={cn(
        "absolute top-0 left-[240px] z-[99999]",
        "w-[calc(100% - 240px)]",
        isResetting && "transition-all ease-in-out duration-300",
        isMobile && "left-0 w-full"
      )}>
        <nav className={cn(
          "bg-transparent",
          "px-3 py-2",
          "w-full"
        )}>
          {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="size-6 text-muted-foreground" />}
        </nav>
      </div>
    </>
  )
}