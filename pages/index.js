import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Home/Banner'
import Featured from '../components/Home/Featured'
import Hero from '../components/Home/Hero'
import Welcome from '../components/Home/Welcome'

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
      <Welcome />
      <Banner />
      <Featured />
      <Footer />
    </div>
  )
}
