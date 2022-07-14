import Link from 'next/link'

const navigation = [
  { name: "Schedule", slug: "/schedule" },
  { name: "Speakers", slug: "/speakers" },
  { name: "Team", slug: "/team" },
  { name: "FAQs", slug: "/faqs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({current_page}) {
    return (
      <div className="hidden lg:flex bg-gray1 w-full items-center justify-between border-b border-gray2">
        <div>
          Logo
        </div>
        <div className="flex gap-x-4 uppercase h-[72px]">
          {navigation.map((item) => (
            <Link key={item.slug} href={item.slug}>
                <a
                  key={item.name}
                  href={item.slug}
                  className={classNames(
                    current_page == item.name
                      ? 'border-purple text-white'
                      : 'border-transparent text-white text-opacity-50 hover:text-opacity-100',
                    'whitespace-nowrap py-7 px-1 border-b text-sm font-bold'
                  )}
                >
                {item.name}
              </a>                
            </Link>
          ))
          }
        </div>
        <div className="flex gap-x-2 lg:gap-x-4 mr-10">
          <Link href="https://cesium.di.uminho.pt/">
            <img class="w-[80px] cursor-pointer opacity-70 hover:opacity-100" src="/images/logos/cesium.svg" />
          </Link>
          <Link href="https://necc.di.uminho.pt/">
            <img class="w-[80px] cursor-pointer opacity-70 hover:opacity-100" src="/images/logos/necc.svg" />
          </Link>
        </div>
      </div>
    );
}