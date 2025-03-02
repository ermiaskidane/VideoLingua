import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

type DropDownProps = {
  title: string
  trigger: React.ReactElement
  children: React.ReactNode
  ref?: React.RefObject<HTMLButtonElement>
}

const DropDown = ({ trigger, title, children, ref }: DropDownProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild ref={ref}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent className="rounded-2xl w-56 items-start bg-background border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-4xl p-4">
        <h4 className="text-md pl-2">{title}</h4>
        <Separator className="bg-primary my-1" />
        {children}
      </PopoverContent>
    </Popover>
)
}

export default DropDown