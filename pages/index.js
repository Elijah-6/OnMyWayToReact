import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
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
        {/* {exploreData.map((item)=>(<h2>{item.location}</h2>))} */}
      </section>
     </main>
    </div>
  )
};


// export async function getStaticProps() { 
//   const exploreData = await fetch("https://links.papareact.com/pyp").then((res)=>res.json());
//   return {
//     props: {exploreData},
//   };
// }

