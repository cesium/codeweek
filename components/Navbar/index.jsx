import Link from "next/link";

import { Disclosure, Menu, Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Schedule", slug: "/schedule" },
  { name: "FAQs", slug: "/faqs" },
  { name: "Last Edition", slug: "https://2023.codeweek.cesium.di.uminho.pt/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ current_page, children }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="hidden lg:flex bg-gray1 w-full items-center justify-between border-b border-gray2 z-10">
            <Link href="/">
              <div className="flex row ml-6 cursor-pointer opacity-70 hover:opacity-100">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  className="w-[40px] h-[40px] mr-2 self-center"
                  src="/images/logos/codeweek-icon-white.svg"
                  alt=""
                />
                <a className="text-white text-md font-ocr uppercase font-semibold sm:text-lg sm:font-bold px-1 py-5">
                  Code Week
                </a>
              </div>
            </Link>
            <div className="flex gap-x-4 uppercase h-[72px] mx-auto">
              {navigation.map((item) => (
                <Link key={item.slug} href={item.slug}>
                  <a
                    key={item.name}
                    href={item.slug}
                    className={classNames(
                      current_page == item.name
                        ? "border-primary text-white"
                        : "border-transparent text-white text-opacity-50 hover:text-opacity-100",
                      "whitespace-nowrap py-7 px-1 border-b text-base font-bold font-ocr"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="flex gap-x-2 lg:gap-x-4 mr-10">
              <Link href="https://cesium.di.uminho.pt/">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  className="w-[80px] cursor-pointer opacity-70 hover:opacity-100"
                  src="/images/logos/cesium.svg"
                  alt=""
                />
              </Link>
              <Link href="https://necc.di.uminho.pt/">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  className="w-[80px] cursor-pointer opacity-70 hover:opacity-100"
                  src="/images/logos/necc.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="relative z-50 flex row lg:hidden h-[72px] bg-gray1 w-full items-center justify-between border-b border-gray2">
            <Link href="/">
              <div className="ml-7 cursor-pointer opacity-70 hover:opacity-100">
                <img
                  className="w-[50px] h-[50px] justify-center"
                  src="/images/logos/codeweek-icon-white.svg"
                  alt=""
                />
              </div>
            </Link>
            <Disclosure.Button className="inline-flex h-6 w-6 mr-10 items-center justify-center text-white">
              {open ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-white text-opacity-50 hover:text-opacity-100 whitespace-nowrap py-7 px-1ext-sm font-bold"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-white text-opacity-50 hover:text-opacity-100 whitespace-nowrap py-7 px-1ext-sm font-bold"
                />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className={`lg:hidden bg-gray1 w-full`}>
            <div className="relative z-50 min-h-screen object-cover px-2 pt-12">
              {navigation.map((item) => (
                <Link key={item.slug} href={item.slug}>
                  <a
                    key={item.name}
                    href={item.slug}
                    className={classNames(
                      current_page == item.name
                        ? " "
                        : "  text-opacity-50 hover:text-opacity-100",
                      "block whitespace-nowrap py-4 px-2 font-ocr text-center text-xl font-bold uppercase text-white"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
          {open ? <div className="hidden lg:block">{children}</div> : children}
        </>
      )}
    </Disclosure>
  );
}
