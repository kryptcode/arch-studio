import Head from 'next/head'
import Banner from '../components/About/Banner'
import Hero from '../components/About/Hero'
import LGrid from '../components/About/LGrid'
import Header from '../components/Header'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
        <Head>
            <title>Arch Studio | About Us</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Hero />
        <Banner />
        <LGrid />
        <Footer />
    </div>
  )
}

export default about