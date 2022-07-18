import Head from 'next/head'

import Navbar from '/components/Navbar'

function Home(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center bg-black my-auto px-[400px]">
        <p className="text-white text-8xl font-extrabold">
          EU Code Week 2022 @ University of Minho 
        </p>
        <div className="flex gap-x-4 mt-20">
          <p className="text-purple text-3xl font-bold">
            October 4-10, 2022
          </p> 
          <p className="text-gray2 text-3xl font-medium">
            |
          </p>
          <p className="text-purple text-3xl">
            Building 7, Gualtar Campus
          </p> 
        </div>
      </main>

      </Navbar>


    </div>
  )
}

export default Home
