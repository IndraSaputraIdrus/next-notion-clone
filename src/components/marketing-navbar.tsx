"use client"

import MarketingLogo from "@/components/marketing-logo";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Spinner from "./spinner";
import Link from "next/link";

export default function MarketingNavbar() {
  const { isLoading, isAuthenticated } = useConvexAuth()

  return (
    <header className="p-4 flex items-center justify-between" >
      <MarketingLogo />
      <div className="flex items-center gap-2">
        {isLoading ? (<Spinner />) : null}

        {!isAuthenticated && !isLoading ? (
          <>
            <SignInButton mode="modal">
              <Button size="sm" variant="ghost">Log in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get indotion for free</Button>
            </SignUpButton>
          </>
        ) : null}

        {isAuthenticated && !isLoading ? (
          <>
            <Button size="sm" asChild>
              <Link href="/documents">
                Enter indotion
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        ) : null}
      </div>
    </header>
  )
}
