import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'

function Crew() {
  return (
    <div>
      <Head>
        <title>Spacity - Crew</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <main>
        <Navbar currentPage='crew' />
      </main>
    </div>
  )
}

export default Crew