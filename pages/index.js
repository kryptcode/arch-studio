import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Arch Studio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Hero />
    </div>
  )
}
