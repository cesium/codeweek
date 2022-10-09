import Head from "next/head";
import Link from "next/link";
import Navbar from "/components/Navbar";

import speakers from "/data/speakers.json";

export default function Speakers() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Speakers</title>
        <link rel="icon" href="/cw-favicon.ico" />
      </Head>

      <Navbar current_page="Speakers">
        <main className="flex w-full flex-1 flex-col bg-black my-auto">
          <div className="px-10 mb-10">
            <p className="text-white text-[40px] mt-14 font-extrabold">
              Speakers
            </p>
            <p className="text-gray3 text-md mt-4">
              They never forget to close their brackets, and they are here to
              tell you more things than StackOverflow could ever tell. Check who
              are our amazing speakers:
            </p>
          </div>

          <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
            {speakers.map((speaker, i) => (
              <Link href={`/speaker/${i}`} key={speaker}>
                <div className="space-y-4 cursor-pointer group relative rounded-lg border border-gray-300 bg-gray1 border-gray2 shadow-sm hover:border-purple w-[220px]">
                  <div className="aspect-w-3 aspect-h-2">
                    <div className="relative overflow-hidden h-[220px]">
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={`/images/speakers/${speaker.photo}`}
                        alt={speaker.name}
                        className="relative w-[220px] overflow-y-hidden"
                        height="220"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 px-4 pb-8">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <p className="text-white text-xl font-bold">
                        {speaker.name}
                      </p>
                      <p className="text-sm text-gray3">{speaker.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </Navbar>
    </div>
  );
}
