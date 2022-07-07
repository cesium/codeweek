import Link from 'next/link'

const navigation = [
  { name: "Schedule", slug: "/schedule" },
  { name: "Speakers", slug: "/speakers" },
  { name: "Hackathon", slug: "/hackathon" },
  { name: "Team", slug: "/team" },
  { name: "Challenges", slug: "/challenges" },
  { name: "FAQs", slug: "/faqs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({current_page}) {
    return (
      <div className="flex bg-gray1 w-full items-center justify-center border-b border-gray2">
        <div className="flex gap-x-4 uppercase h-[72px]">
          {navigation.map((item) => (
            <Link key={item.slug} href={item.slug} passHref>
                <a
                  key={item.name}
                  href={item.slug}
                  className={classNames(
                    current_page == item.name
                      ? 'border-purple text-white'
                      : 'border-transparent text-white text-opacity-50 hover:text-opacity-100',
                    'whitespace-nowrap py-7 px-1 border-b text-sm font-bold'
                  )}
                  passHref
                >
                {item.name}
              </a>                
            </Link>
          ))
          }
        </div>
      </div>
    );
}