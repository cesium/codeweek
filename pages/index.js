import Head from "next/head";

import Navbar from "/components/Navbar";

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Code Week 2022</title>
        <link rel="icon" href="/cw-favicon.ico" />
      </Head>

      <Navbar>
        <main className="flex w-full flex-1 flex-col items-center justify-center text-center bg-black my-auto ">
          <div className="space">
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
          </div>
          <div className="md:max-w-[700px] px-4">
            <p className="text-white text-5xl font-bold sm:text-6xl sm:font-extrabold">
              EU Code Week 2022 @ University of Minho
            </p>
            <div className="grid grid-cols-2 divide-x divide-white mt-20">
              <p className="text-purple text-lg sm:text-2xl self-center p-4 justify-self-center">
                October 4 - 10, 2022
              </p>
              <p className="text-purple text-lg sm:text-2xl self-center p-4 justify-self-center">
                Building 7, Gualtar Campus
              </p>
            </div>
          </div>
        </main>
      </Navbar>
    </div>
  );
}

export default Home;
