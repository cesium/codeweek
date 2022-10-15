import Link from "next/link";
import Image from "next/image";
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

import Navbar from "/components/Navbar";

import speakers from "/data/speakers.json";

export default function Speaker() {
  const router = useRouter();

  const { slug } = router.query;

  const [speaker, setSpeaker] = useState({});

  useEffect(() => {
    if (slug) {
      setSpeaker(speakers[slug]);
    }
  }, [slug]);

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
            <Image
              src={`/images/speakers/${speaker.photo}`}
              alt={speaker.name}
              width={500}
              height={500}
            />
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
              {speaker.bio && (
                <>
                  <p className="text-white text-2xl mt-4 font-bold">Bio</p>
                  <p className="text-gray3 text-lg mt-1">{speaker.bio}</p>
                </>
              )}
              {(speaker.linkedin ||
                speaker.github ||
                speaker.twitter ||
                speaker.instagram ||
                speaker.facebook) && (
                <p className="text-white text-2xl mt-4 font-bold">
                  Social Media
                </p>
              )}
              <div className="space-x-4 w-[160px] h-[160px] mt-4 gap-x-6 text-white text-xl">
                {speaker.linkedin && (
                  <a
                    className="opacity-50 hover:opacity-100"
                    href={`https://www.linkedin.com/in/${speaker.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                )}
                {speaker.github && (
                  <a
                    className="opacity-50 hover:opacity-100"
                    href={`https://github.com/${speaker.github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </a>
                )}
                {speaker.twitter && (
                  <a
                    className="opacity-50 hover:opacity-100"
                    href={`https://twitter.com/${speaker.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {speaker.instagram && (
                  <a
                    className="opacity-50 hover:opacity-100"
                    href={`https://www.instagram.com/${speaker.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                {speaker.facebook && (
                  <a
                    className="opacity-50 hover:opacity-100"
                    href={`https://www.facebook.com/${speaker.facebook}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
