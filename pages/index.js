import Head from "next/head";

import Navbar from "/components/Navbar";
import Background from "/components/Background";

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Code Week 2023</title>
        <link rel="icon" href="/cw-favicon.ico" />
      </Head>

      <Navbar>
        <main className="flex w-full flex-1 flex-col items-center justify-center bg-black text-center my-auto ">
          <div className="md:max-w-[700px] px-4 select-none">
            <object
              data="images/logos/codeweek-2023.svg"
              className="w-full sm:mx-0 sm:w-[300px]"
              alt="Code Week 2023"
            />
            <div>
              <p className="text-white uppercase font-ocr text-lg sm:text-2xl mt-4 text-left">
                16 - 20 October
              </p>
              <p className="text-primary uppercase font-ocr text-lg sm:text-xl self-center text-left mt-2">
                Building 7, <br /> Gualtar Campus
              </p>
            </div>
          </div>
          <Background />
        </main>
      </Navbar>
    </div>
  );
}

export default Home;
