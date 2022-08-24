import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '/components/Navbar'

import team from '/data/team.json'

export default function Team(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar current_page="Team" >

        <main className="flex w-full flex-1 flex-col bg-black my-auto">
          
          <div className="px-10 mb-10">
            <p className="text-white text-[40px] mt-14 font-extrabold">
              Team
            </p>
            <p className="text-gray3 text-md mt-4">
              This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.
            </p>
          </div>

          <div className="px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
          {team.map(member => (
            <div key={member}>
              <div className="space-y-4 group relative rounded-lg border border-gray-300 bg-gray1 border-gray2 shadow-sm overflow-hidden">
                <div className="aspect-w-3 aspect-h-2">
                  <img className="hidden absolute inset-0 top-2 left-2 z-40 w-12 sm:w-20 group-hover:block" src={`/images/logos/${member.organization}.svg`} />
                  <div className="absolute inset-0 z-40 bg-gradient-to-b from-transparent opacity-40 transition duration-200 ease-in group-hover:translate-y-20 via-purple to-purple group-hover:rounded-t-[50px]" />
                  <Image src={`/images/team/${member.photo}`} alt={member.name} width={500} height={500} />
                  <p className="hidden absolute inset-x-0 bottom-4 z-40 text-sm font-medium text-center text-white sm:bottom-4 sm:text-lg sm:font-bold md:text-xl group-hover:block">
                    {member.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>

        </main>

      </Navbar>


    </div>
  )
}