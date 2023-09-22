import Image from 'next/image'
import Header from '@/app/components/organisms/header/header.jsx'
import Searcher from '@/app/components/organisms/searcher/searcher.jsx'
import MainCards from '@/app/components/organisms/mainCards/mainCards.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Searcher />
        <MainCards />
      </main>
    </>
  )
}
