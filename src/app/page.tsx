import TransactionCard from "@/components/TransactionCard";

export default function Home() {
  return (
    <main className='flex flex-col gap-10'>
      <section className='px-4 bg-zinc-200 rounded-lg py-7 text-center'>
        <h2 className='text-7xl font-bold'>$200</h2>
        <span className='text-muted-foreground text-red-600 font-medium'> -0.7% from last month</span>
      </section>

      <section className='px-4 bg-zinc-200 rounded-lg py-7'>
        <h2 className='text-2xl font-medium'>Last transactions</h2>

        <TransactionCard />

      </section>
    </main>
  )
}



