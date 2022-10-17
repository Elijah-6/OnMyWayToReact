import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* Header */}
     <Header/>
     {/* Banner */}
     <Banner/>
     <main className='max-w-7xl mx-auto'>
      <section className='pt-5'>
        <h3 className='font-semibold text-4xl pb-5'> Explore Nearby</h3>
      </section>
     </main>
    </div>
  )
}

export default Home
