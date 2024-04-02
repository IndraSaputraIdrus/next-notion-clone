"use client"

import { useParams, useRouter } from "next/navigation"
import { Doc, Id } from "../../convex/_generated/dataModel"
import { useState } from "react"
import { useQuery } from "convex/react"
import { api } from "@/../convex/_generated/api"
import Item from "./item"
import { FileIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocumentListProps {
  parentDocumentId?: Id<"documents">
  level?: number
  data?: Doc<"documents">
}

function Document({
  parentDocumentId,
  level = 0,
}: DocumentListProps) {

  const params = useParams()
  const router = useRouter()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const onExpand = (documentId: string) => {
    setExpanded(prev => ({
      ...prev,
      [documentId]: !prev[documentId]
    }))
  }

  const documents = useQuery(api.documents.getDocuments, {
    parentDocument: parentDocumentId
  })

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`)
  }

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <p
        style={{
          paddingLeft: level ? `${(level * 12) + 25}px` : undefined
        }}
        className={cn(
          "text-sm font-medium",
          "text-muted-foreground/80",
          "hidden",
          expanded && "last:block",
          level === 0 && "hidden"
        )}
      >
        No pages inside
      </p>
      {documents.map(doc => (
        <li>
          <Item
            id={doc._id}
            onClick={() => { }}
            label={doc.title}
            icon={FileIcon}
            expanded={expanded[doc._id]}
            onExpand={() => onExpand(doc._id)}
            level={level}
          />

          {expanded[doc._id] && (
            <Document
              parentDocumentId={doc._id}
              level={level + 1}
            />
          )}
        </li>
      ))}
    </>
  )
}

export default function DocumentList() {
  return (
    <ul className="mt-4">
      <Document />
    </ul>
  )

}
