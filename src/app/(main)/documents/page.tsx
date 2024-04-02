"use client"

import ToggleNav from "@/components/main-sidebar-toggle";
import { cn } from "@/lib/utils";
import { MenuIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import IlustrationImage from "@/lib/assets/images/undraw-unboxing-ilustration.svg"
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { toast } from "sonner";

export default function DocumentsPage() {

  const { user } = useUser()
  const create = useMutation(api.documents.create)

  function onCreate() {
    const promise = create({
      title: "Untitled",
    })

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created",
      error: "Failed to create a new note"
    })
  }

  return (
    <div className={cn(
      "relative h-full",
      "flex items-center justify-center"
    )}>
      <ToggleNav className="sm:hidden absolute top-3 left-3 hover:bg-neutral-300 rounded">
        <MenuIcon className="size-6 text-muted-foreground" />
      </ToggleNav>
      <div className="flex flex-col items-center gap-5">
        <Image height={300} width={300} alt="unboxing" src={IlustrationImage} />
        <h2 className="text-lg font-medium text-center">Welcome to {user?.fullName}&apos;s Indotion</h2>
        <Button onClick={onCreate}>
          <PlusCircle className="size-4 mr-2" />
          Create a note
        </Button>
      </div>
    </div>
  )
}

