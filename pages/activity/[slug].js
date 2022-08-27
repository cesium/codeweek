import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Navbar from "/components/Navbar";
import DefaultPhoto from "/components/DefaultPhoto";

import schedule from "/data/schedule.json";
import speakers from "/data/speakers.json";

export default function Activity() {
  const router = useRouter();

  const { day_id, slug } = router.query;

  const [day, setDay] = useState({});
  useEffect(() => {
    if (day_id) {
      setDay(schedule[day_id]);
    }
  }, [day_id]);

  const [activity, setActivity] = useState({});

  useEffect(() => {
    if (day.activities) {
      setActivity(day.activities[slug]);
    }
  }, [day.activities, slug]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Navbar current_page="Schedule">
        <main className="flex w-full flex-1 flex-col bg-black my-auto px-4 sm:px-8 md:px-20">
          <Link href="/schedule">
            <div className="cursor-pointer mt-8 sm:mt-20 text-white text-md  sm:font-bold opacity-70 hover:opacity-100">
              {"< Back to Schedule"}
            </div>
          </Link>

          <div className="mt-6 sm:mt-10 hidden sm:flex items-center justify-between lg:w-2/3 xl:w-1/2">
            <p className="text-white text-[60px] font-bold md:font-extrabold">
              {activity.title}
            </p>
            <p className="text-[60px]">{activity.emoji}</p>
          </div>

          <div className="mt-6 sm:mt-10 sm:hidden items-center justify-between lg:w-2/3 xl:w-1/2">
            <p className="text-white text-[60px] font-bold md:font-extrabold">
              {activity.title} {activity.emoji}
            </p>
          </div>

          <div className="lg:w-2/3 xl:w-1/2">
            <p className="text-white text-2xl mt-4 font-bold">Hours</p>
            <p className="text-gray3 text-md mt-1">
              {activity.start} - {activity.end}
            </p>
            <p className="text-white text-2xl mt-4 font-bold">Location</p>
            <p className="text-gray3 text-md mt-1">{activity.location}</p>
            <p className="text-white text-2xl mt-4 font-bold">Description</p>
            <p className="text-gray3 text-md mt-1">{activity.description}</p>
            <p className="text-white text-2xl mt-4 font-bold">
              {activity.speakers && "Speakers"}
            </p>
            <div className="my-4 grid lg:grid-cols-2 gap-2">
              {activity.speakers &&
                activity.speakers.map((speaker) => (
                  <div
                    className="cursor-pointer group sm:w-80 relative rounded-lg border border-gray-300 bg-gray1 border-gray2 px-6 py-5 shadow-sm hover:border-white"
                    key={speaker}
                  >
                    <div className="flex items-center space-x-3 rounded-sm border-gray3">
                      <div className="flex-shrink-0">
                        {(speaker.photo && (
                          /* eslint-disable @next/next/no-img-element */
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`/images/speakers/${speaker.photo}`}
                            alt={speaker.name}
                          />
                        )) || <DefaultPhoto name={speaker.name} />}
                      </div>
                      <Link
                        href={`/speaker/${speakers.findIndex(
                          (s) => s.name == speaker.name
                        )}`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-white opacity-75">
                              {speaker.name}
                            </p>
                            <p className="text-sm text-gray3 opacity-70 truncate">
                              {speaker.role}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </Navbar>
    </div>
  );
}
