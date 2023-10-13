import Head from "next/head";
import PersonCard from "../components/PersonCard";
import Navbar from "/components/Navbar";

import team from "/data/team.json";

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Team</title>
        <link rel="icon" href="/cw-favicon.ico" />
      </Head>

      <Navbar current_page="Team">
        <main className="flex w-full flex-1 flex-col bg-black my-auto">
          <div className="px-10 mb-10">
            <p className="text-white text-[40px] mt-14 font-extrabold font-ocr uppercase">
              Team
            </p>
            <p className="text-gray3 text-md mt-4">
              CeSIUM and NECC joined forces and became almost as strong as a
              semicolon in C. Look at us: hard working people, code enthusiasts,
              just like you!
            </p>
          </div>

          <div className="mb-4 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
            {team.map((member) => (
              <PersonCard key={member} person={member} isSpeakers={false} />
            ))}
          </div>
        </main>
      </Navbar>
    </div>
  );
}
