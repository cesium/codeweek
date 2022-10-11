import Head from "next/head";
import Link from "next/link";
import Navbar from "/components/Navbar";

import speakers from "/data/speakers.json";
import PersonCard from "../components/PersonCard";

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
                <a>
                  <PersonCard key={speaker} person={speaker} isSpeakers />
                </a>
              </Link>
            ))}
          </div>
        </main>
      </Navbar>
    </div>
  );
}
