import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image";
import IlustrationNote from "@/lib/assets/images/undraw-add-notes-ilustration.svg"
import IlustrationReading from "@/lib/assets/images/undraw-book-lover-ilustration.svg"

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto text-center flex-1 py-14">
      <h1 className="text-6xl font-bold mb-2">Your ideas, Documents, & Plans. unified. Welcome to Indotion</h1>
      <p className="text-xl font-semibold text-muted-foreground mb-5">Indotion is the connected workspace where<br /> better, faster, work happens</p>

      <Button>Enter Indotion <ArrowRightIcon className="size-4 ml-2" /></Button>

      <div className="flex items-center h-[300px] mt-20 gap-2">
        <div className="w-1/2 h-full relative">
          <Image src={IlustrationNote} fill alt="notes-ilustration" />
        </div>
        <div className="w-1/2 h-full relative">
          <Image src={IlustrationReading} fill alt="notes-ilustration" />
        </div>
      </div>
    </div>
  )
}
