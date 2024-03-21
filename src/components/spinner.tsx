import { Loader } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '@/lib/utils'

const spinnerVariant = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: 'size-4',
      sm: 'size-2',
      lg: 'size-5',
      icon: 'size-10'
    }
  },
  defaultVariants: {
    size: "default"
  }
})

interface SpinnerProps extends VariantProps<typeof spinnerVariant> { }

export default function Spinner({ size }: SpinnerProps) {
  return (
    <Loader className={cn(spinnerVariant({ size }))} />
  )
}
