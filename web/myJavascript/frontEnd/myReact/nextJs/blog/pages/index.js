import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja Blog</title>
        <meta name='keywords' content='cool next js blog'/>
    </Head>
    <div>
      <p>asdfijapef</p>
      <p>as5664651wf</p>
      
      <Link href={"/ninjas/list"}>
        <a>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
