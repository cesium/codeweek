import Head from "next/head";
import PersonCard from "../components/PersonCard";
import Navbar from "/components/Navbar";

import team from "/data/team.json";

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar current_page="Team">
        <main className="flex w-full flex-1 flex-col bg-black my-auto">
          <div className="px-10 mb-10">
            <p className="text-white text-[40px] mt-14 font-extrabold">Team</p>
            <p className="text-gray3 text-md mt-4">
              This is an open source demo that Next.js developers can clone,
              deploy, and fully customize for events. Created through
              collaboration of marketers, designers, and developers at Vercel.
            </p>
          </div>

          <div className="px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
            {team.map((member) => (
              <PersonCard key={member} person={member} isSpeakers={false} />
            ))}
          </div>
        </main>
      </Navbar>
    </div>
  );
}
