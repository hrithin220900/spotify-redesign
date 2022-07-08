import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const {status, data: session} = useSession({
    required:true,
    onUnauthenticated() {
      router.push("/auth/signin")
    },
  });

  if(status === "loading"){
    return <Loader />
  }


  return (
    <div className="">
      <Head>
        <title>Spotify-Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <link key="gfont" rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <Head>
        <link key="gfont" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      </Head>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Dashboard />
    </div>
  )
}
