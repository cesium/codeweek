import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Navbar from '/components/Navbar'

import speakers from '/data/speakers.json'

export default function Speaker() {

  const router = useRouter();

  const { slug } = router.query;

  const [speaker, setSpeaker] = useState({})
  
  useEffect(() => {
    if (slug) {
      setSpeaker(speakers[slug])
    }
  }, [slug])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">

      <Navbar current_page="Speakers" />

      <main className="flex w-full flex-1 flex-col bg-black my-auto">

        <Link href="/speakers">
          <div className="cursor-pointer mt-20 px-20 text-white text-lg font-bold opacity-70 hover:opacity-100">
            {"< Back to Speakers"} 
          </div>
        </Link>

        <div className="mt-10 px-20 flex flex-col xl:flex-row xl:items-center">
          
          <div className="flex-none">
            <img className="h-80 w-80 md:h-[300px] md:w-[300px] rounded-lg" src={`/images/speakers/${speaker.photo}`} />
          </div>

          <div className="mt-10 xl:mt-0 xl:ml-10">
            <div className="">
              <p className="text-white text-3xl md:text-[60px] font-extrabold">
                {speaker.name}
              </p>
              <p className="mt-4 text-white text-lg md:text-xl font-medium">
                {speaker.role}
              </p>
            </div>

            <div className="mt-8 xl:w-2/3">
             <p className="text-white text-2xl mt-4 font-bold"> 
                Bio  
              </p>
              <p className="text-gray3 text-md mt-1"> 
                 {speaker.bio}
              </p>
              {
                (speaker.github ||
                speaker.facebook ||
                speaker.instagram ||
                speaker.linkedin ||
                speaker.twitter) &&
                <p className="text-white text-2xl mt-4 font-bold"> 
                  Social Media  
                </p>
              }
              <div className="flex mt-4 gap-x-6 text-white text-xl">
                {
                speaker.github &&
                <a
                  className="opacity-50 hover:opacity-100"
                  href={`https://github.com/${speaker.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                }
                {
                speaker.facebook &&
                <a
                  className="opacity-50 hover:opacity-100"
                  href={`https://www.facebook.com/${speaker.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                }
                {
                speaker.instagram &&
                <a
                  className="opacity-50 hover:opacity-100"
                  href={`https://www.instagram.com/${speaker.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                }
                {
                speaker.linkedin &&
                <a
                  className="opacity-50 hover:opacity-100"
                  href={`https://www.linkedin.com/in/${speaker.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                }
                {
                speaker.twitter &&
                <a
                  className="opacity-50 hover:opacity-100"
                  href={`https://twitter.com/${speaker.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                }
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}