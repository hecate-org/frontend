import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Chanels from './Chanels'
import User from './User'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title}: Props) => (
  <div className="bg-gray-600">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="w-10/12 flex mx-auto h-screen">
      <header className="w-2/6 bg-gray-600 p-6">
        <User name="Jan" familyname="Jansens"></User>
        <Chanels></Chanels>
      </header>
      <main className="w-4/6 bg-gray-400 p-6">
        {children}
      </main>
    </div>
  </div>
)

export default Layout
