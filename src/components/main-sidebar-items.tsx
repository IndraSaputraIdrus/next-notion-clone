"use client"

import { useMutation } from "convex/react"
import { api } from "@/../convex/_generated/api"
import { PlusCircleIcon, Search, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import Item from "./item"
import DocumentList from "./documents-list"


export default function MainSidebarItem() {

  const create = useMutation(api.documents.create)

  function handleClick() {
    const promise = create({ title: "Untitled" })

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    })
  }

  return (
    <div className="w-full">
      <ul>
        <li>
          <Item
            className="relative"
            onClick={() => { }}
            label="Search"
            icon={Search}
          >
            <kbd
              className={cn(
                "hidden sm:block",
                "absolute right-4 top-1/2",
                "-translate-y-1/2",
                "text-xs",
                "p-1 px-2 rounded",
                "text-muted-foreground bg-gray-100 shadow",
                "group-hover:opacity-0 transition",
                "pointer-event-none select-none"
              )}>
              CTRL K
            </kbd>
          </Item>
        </li>
        <li>
          <Item
            onClick={() => { }}
            label="Settings"
            icon={Settings}
          />
        </li>
        <li>
          <Item
            onClick={handleClick}
            label="New page"
            icon={PlusCircleIcon}
          />
        </li>
      </ul>
      <DocumentList />
    </div>
  )
}
