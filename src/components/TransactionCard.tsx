import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Printer, Twitch } from 'lucide-react'

import { Button } from "./ui/button";

const TransactionCard = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className='flex flex-row items-center bg-white py-3 px-5 rounded-lg mt-5 justify-between group hover:bg-zinc-300 cursor-pointer'>
                    <div className='flex items-center gap-2 '>
                        <Twitch />
                        <h5 className='text-xl'>Twitch inc.</h5>
                    </div>

                    <span className='text-green-500 text-2xl font-medium'>+$200</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className={`w-[var(--radix-popover-trigger-width)] max-h-[var(--radix-popover-content-available-height)]`} align="start">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <h6 className="font-semibold">Twitch</h6>
                        <h4>12.04.2022</h4>
                    </div>

                    <div>
                        <Button variant="outline" size="icon">
                            <Printer className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default TransactionCard;