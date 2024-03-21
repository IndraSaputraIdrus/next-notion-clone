"use client"

import { Button } from "@/components/ui/button"
import { useConvexAuth } from "convex/react"
import { ArrowRightIcon } from "lucide-react"
import Spinner from "./spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

export default function MarketingHeader() {

  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 md:text-6xl">Your ideas, Documents, & Plans. unified. Welcome to Indotion</h1>
      <p className="text-base font-semibold text-muted-foreground mb-7 md:text-xl">Indotion is the connected workspace where<br /> better, faster, work happens</p>

      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : null}

      {!isLoading && !isAuthenticated ? (
        <SignInButton mode="modal">
          <Button>
            Get Indotion for free<ArrowRightIcon className="size-4 ml-2" />
          </Button>
        </SignInButton>
      ) : null}

      {!isLoading && isAuthenticated ? (
        <Button asChild>
          <Link href="/documents">
            Enter Indotion <ArrowRightIcon className="size-4 ml-2" />
          </Link>
        </Button>
      ) : null}
    </>
  )
}
