import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image";
import IlustrationNote from "@/lib/assets/images/undraw-add-notes-ilustration.svg"
import IlustrationReading from "@/lib/assets/images/undraw-book-lover-ilustration.svg"

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-14 px-5">
      <h1 className="text-3xl font-bold mb-4 md:text-6xl">Your ideas, Documents, & Plans. unified. Welcome to Indotion</h1>
      <p className="text-base font-semibold text-muted-foreground mb-7 md:text-xl">Indotion is the connected workspace where<br /> better, faster, work happens</p>

      <Button>Enter Indotion <ArrowRightIcon className="size-4 ml-2" /></Button>

      <div className="flex flex-col gap-5 items-center mt-20  h-[450px] md:h-[300px] md:flex-row md:gap-2">
        <div className="w-full h-full relative md:w-1/2">
          <Image src={IlustrationNote} fill alt="notes-ilustration" />
        </div>
        <div className="w-full h-full relative md:w-1/2">
          <Image src={IlustrationReading} fill alt="notes-ilustration" />
        </div>
      </div>
    </div>
  )
}
