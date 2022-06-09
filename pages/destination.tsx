import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'

function Destination() {
  return (
    <div>
      <Head>
        <title>Spacity - Destination</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <main>
        <Navbar currentPage='destination' />
      </main>
    </div>
  )
}

export default Destination