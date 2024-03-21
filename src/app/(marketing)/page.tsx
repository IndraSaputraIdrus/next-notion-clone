import Image from "next/image";
import IlustrationNote from "@/lib/assets/images/undraw-add-notes-ilustration.svg"
import IlustrationReading from "@/lib/assets/images/undraw-book-lover-ilustration.svg"
import MarketingHeader from "@/components/marketing-header";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-14 px-5">
      <MarketingHeader />

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
