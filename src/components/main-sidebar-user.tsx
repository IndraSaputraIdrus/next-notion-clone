import { SignOutButton, useUser } from "@clerk/clerk-react"
import { ChevronsLeftRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function UserItem() {
  const { user } = useUser()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center text-sm p-3 h-min w-full hover:bg-primary/5 cursor-pointer">
          <div className="gap-2 flex items-center justify-center max-w-[200px] sm:max-w-[150px]">
            <Image width={35} height={35} className="rounded-full" src={user?.imageUrl ?? ""} alt={user?.fullName ?? ""} />
            <p className="line-clamp-1">{user?.fullName}&apos;s Indotion</p>
          </div>
          <ChevronsLeftRight className="size-4 text-muted-foreground rotate-90" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col gap-4 p-2">
          <p className="text-xs leading-none font-medium text-muted-foreground">{user?.emailAddresses[0].emailAddress}</p>
          <div className="flex items-center gap-2">
            <Image width={35} height={35} className="rounded-full" src={user?.imageUrl ?? ""} alt={user?.fullName ?? ""} />
            <p className="text-sm line-clamp-1">{user?.fullName}&apos;s Indotion</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground">
          <SignOutButton>
            Log out
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
