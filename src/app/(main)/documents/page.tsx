import ToggleNav from "@/components/main-sidebar-toggle";
import { MenuIcon } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div>
      <ToggleNav className="sm:hidden hover:bg-neutral-300 rounded">
        <MenuIcon className="size-6 text-muted-foreground" />
      </ToggleNav>
      DocumentsPage
    </div>
  )
}

