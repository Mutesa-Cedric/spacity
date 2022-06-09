import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'

function Technology() {
  return (
    <div>
      <Head>
        <title>Spacity - Technology</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <main>
        <Navbar currentPage='technology' />
      </main>
    </div>
  )
}

export default Technology