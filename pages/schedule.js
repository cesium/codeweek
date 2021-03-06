import Head from 'next/head'
import Link from 'next/link'

import Navbar from '/components/Navbar'
import DefaultPhoto from '/components/DefaultPhoto'

import schedule from '/data/schedule.json'

export default function Schedule(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar current_page="Schedule" />

      <main className="flex w-full flex-1 flex-col bg-black my-auto">
        
        <div className="px-10 mb-10">
          <p className="text-white text-[40px] mt-14 font-extrabold">
            Schedule
          </p>
          <p className="text-gray3 text-md mt-4">
            This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.
          </p>
        </div>

        {schedule.map((day, i0) => (
          <div className="sm:flex border-t border-gray2 sm:py-4">
            <div className="px-10 py-4 sm:py-0 sm:p-10 flex-shrink-0 sm:mr-4">
              <p className="text-purple text-4xl font-extrabold">
                {day.date}
              </p>
            </div>
            <div className="px-10 overflow-x-scroll flex gap-4 pb-4 sm:pb-0 sm:py-4">
              {day.activities.map((activity, i1) => (
                <div className="flex flex-col"> 
                  <div className="text-gray3 text-md"> 
                     {activity.start} - {activity.end}
                  </div> 
                  <> 
                  <Link href={`/activity/${i1}?day_id=${i0}`} >
                    <div className="cursor-pointer group w-80 mt-2 relative rounded-lg border border-gray-300 bg-gray1 border-gray2 px-6 py-5 shadow-sm hover:border-white">
                      <div className="flex justify-between items-center">
                        <p className="text-white text-xl font-bold"> 
                          {activity.title}
                        </p>
                        { activity.emoji}
                      </div> 
                      <div className="mt-4 text-white text-sm text-opacity-40">
                        {activity.location}
                      </div>
                      { activity.speakers &&

                        ( activity.speakers.length > 1
                            &&
                            <>
                            <div className="flex group-hover:hidden items-center -space-x-5 mt-4">
                              {activity.speakers.map((speaker) => (
                                  <div className="flex-shrink-0">
                                    { speaker.photo &&
                                      <img className="h-10 w-10 rounded-full" src={`/images/speakers/${speaker.photo}`} />
                                      ||
                                      <DefaultPhoto name={speaker.name}/>
                                    }
                                  </div>
                              ))}
                            </div>
                            <div className="hidden group-hover:block items-center mt-4">
                                {activity.speakers.map((speaker) => (
                                  <div className="flex items-center space-x-3 mt-4">
                                    <div className="flex-shrink-0">
                                      { speaker.photo &&
                                        <img className="h-10 w-10 rounded-full" src={`/images/speakers/${speaker.photo}`} />
                                        ||
                                        <DefaultPhoto name={speaker.name}/>
                                      }
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-white opacity-75">
                                          {speaker.name}
                                        </p>
                                        <p className="text-sm text-gray3 opacity-70 truncate">
                                          {speaker.role}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                              ))}
                            </div>
                            </>
                        ||
                        activity.speakers.map((speaker) => (
                          <div className="flex items-center space-x-3 mt-4">
                            <div className="flex-shrink-0">
                              { speaker.photo &&
                                <img className="h-10 w-10 rounded-full" src={`/images/speakers/${speaker.photo}`} />
                                ||
                                <DefaultPhoto name={speaker.name}/>
                              }
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-white opacity-75">
                                  {speaker.name}
                                </p>
                                <p className="text-sm text-gray3 opacity-70 truncate">
                                  {speaker.role}
                                </p>
                              </div>
                            </div>
                          </div>)
                      ))}
                    </div>
                  </Link>
                  </>
                </div>
              ))}
            </div>
          </div>
        ))}

      </main>

    </div>
  )
}
