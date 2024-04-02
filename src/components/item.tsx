"use client"

import { ChevronDown, ChevronRight, LucideIcon, Plus } from "lucide-react"
import { Id } from "@/../convex/_generated/dataModel"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { useMutation } from "convex/react"
import { api } from "@/../convex/_generated/api"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface ItemProps {
  id?: Id<"documents">
  onClick: () => void
  label: string
  icon: LucideIcon
  children?: React.ReactNode
  className?: string
  active?: boolean
  isSearch?: boolean
  level?: number
  expanded?: boolean
  onExpand?: () => void
}

const Item = ({
  id,
  icon: Icon,
  label,
  onClick,
  children,
  className,
  active,
  level = 0,
  expanded,
  onExpand
}: ItemProps) => {

  const ChevronIcon = expanded ? ChevronDown : ChevronRight

  const create = useMutation(api.documents.create)
  const router = useRouter()

  const handleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    onExpand?.()
  }

  const handleCreate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    if (!id) return

    const promise = create({
      title: "Untitled",
      parentDocument: id
    }).then(docId => {
      if (!expanded) {
        onExpand?.()
      }
      // router.push(`/documents/${docId}`)
    })

    toast.promise(promise, {
      loading: "Creating a new note",
      success: "New note created!",
      error: "Failed to create new note!"
    })
  }

  return (
    <div
      onClick={onClick}
      role="button"
      style={{
        paddingLeft: level ? `${(level * 12) + 12}px` : `12px`
      }}
      className={cn(
        "group",
        "hover:bg-primary/5 text-muted-foreground",
        "w-full max-h-[27px]",
        "text-sm font-medium",
        "py-1 pr-3",
        "flex items-center",
        active && "bg-primary/5 text-primary",
        className
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 mr-1"
          onClick={handleExpand}
        >
          <ChevronIcon className="size-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}

      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">
        {label}
      </span>
      {children}

      {!!id && (
        <div className="ml-auto flex items-center gap-2">
          <div
            role="button"
            onClick={handleCreate}
            className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300">
            <Plus className="size-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  )
}

Item.Skeleton = function({ level }: { level?: number }) {
  return (
    <div
      style={{
        paddingLeft: level ? `${(level * 12) + 12}px` : "12px"
      }}
      className="flex gap-2 py-[3px]"
    >
      <Skeleton className="bg-muted-foreground/15 size-4" />
      <Skeleton className="bg-muted-foreground/15 h-4 w-[30%]" />
    </div>
  )
}

export default Item
