import Head from 'next/head'

import Navbar from '/components/Navbar'

export default function Schedule(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar current_page="Schedule" />

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center bg-black my-auto px-[400px]">
      </main>


    </div>
  )
}
