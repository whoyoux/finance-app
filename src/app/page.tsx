import TransactionCard from "@/components/TransactionCard";
import { Redo, Repeat, Undo } from "lucide-react";

export default function Home() {
  return (
    <main className='flex flex-col gap-10'>
      <section className='flex flex-col gap-5 px-4 bg-zinc-200 rounded-lg py-7 text-center'>
        <div>
          <h4 className="text-xl md:text-3xl mb-4 font-medium text-muted-foreground">Your balance is</h4>
          <h2 className='text-5xl md:text-7xl font-semibold'>$ 19,200 USD</h2>
          <span className='text-muted-foreground text-red-600 font-medium'> -0.7% from last month</span>
        </div>
      </section>

      <section className='flex flex-col gap-5 px-4 bg-zinc-200 rounded-lg py-7 text-center'>
        <div className="w-full flex gap-5">
          <div className="flex-1 flex flex-col justify-center bg-white rounded-lg py-6 text-base md:text-xl font-medium">
            <h6>Overall</h6>
            <span className="text-green-500 text-xs md:text-base">+$ 27,000</span>
          </div>
          <div className="flex-1 flex flex-col justify-center bg-white rounded-lg py-6 text-base md:text-xl font-medium">
            <h6>Income</h6>
            <span className="text-green-500 text-xs md:text-base">$ 22,000</span>
          </div>
          <div className="flex-1 flex flex-col justify-center bg-white rounded-lg py-6 text-base md:text-xl font-medium">
            <h6>Spended</h6>
            <span className="text-red-500 text-xs md:text-base">$ 5,000</span>
          </div>
        </div>

        <div className="w-full flex gap-5">
          <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg py-6 text-base md:text-xl font-medium group cursor-pointer hover:bg-gray-300">
            <Undo />
            <h6>Deposit</h6>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg py-6 text-base md:text-xl font-medium group cursor-pointer hover:bg-gray-300">
            <Redo />
            <h6>Withdraw</h6>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg py-6 text-base md:text-xl font-medium group cursor-pointer hover:bg-gray-300">
            <Repeat />
            <h6>Transfer</h6>
          </div>
        </div>
      </section>

      <section className='px-4 bg-zinc-200 rounded-lg py-7'>
        <h2 className='text-2xl font-medium'>Last transactions</h2>

        <TransactionCard />

      </section>
    </main>
  )
}



