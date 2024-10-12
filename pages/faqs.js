import Head from "next/head";

import Navbar from "/components/Navbar";
import Faq from "/components/Faq";

import faqs from "/data/faqs.json";

export default function FAQs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>FAQs</title>
        <link rel="icon" href="/cw-favicon.ico" />
      </Head>

      <Navbar current_page="FAQs" />

      <main className="flex w-full flex-1 flex-col bg-black my-auto">
        <div className="px-10 mb-10">
          <p className="text-white text-[40px] mt-14 font-extrabold font-ocr uppercase">
            FAQs
          </p>
          <p className="text-gray3 text-md mt-4">
            Have all your questions answered.
          </p>
        </div>

        <div className="px-10 grid gap-4 mb-4">
          {faqs.map((faq, index) => (
            <Faq key={index} faq={faq} />
          ))}
        </div>
      </main>
    </div>
  );
}
