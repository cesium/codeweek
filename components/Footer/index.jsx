import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex row w-full h-[52px] bg-gray1 border-t border-gray-2 justify-center items-center border-gray2 z-10">
      <div className="underline hover:opacity-70 hover:text-purple text-white">
        <Link href="http://2019.codeweek.cesium.di.uminho.pt">
          Previous Edition
        </Link>
      </div>
    </div>
  );
}
