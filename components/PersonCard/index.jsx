import Image from "next/image";

export default function PersonCard({ person, isSpeakers }) {
  const imageURL = isSpeakers
    ? `/images/speakers/${person.photo}`
    : `/images/team/${person.photo}`;

  function RenderOverlayOrganization() {
    if (!isSpeakers) {
      return (
        <div className="opacity-0 group-hover:block absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-primary p-2 transition duration-200 ease-in-out group-hover:opacity-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-12 sm:w-20"
            src={`/images/logos/${person.organization}.svg`}
            alt={person.organization}
          />
        </div>
      );
    }
  }
  return (
    <div className="h-full">
      <div className="h-full space-y-4 cursor-pointer group relative rounded-lg border border-gray-300 bg-gray1 border-gray2 shadow-sm transition duration-200 ease-in-out hover:border-primary overflow-hidden">
        <div>
          <RenderOverlayOrganization />

          <Image
            className="rounded-md object-cover"
            src={imageURL}
            alt={person.name}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>

        <div className="space-y-2 px-4 pb-8">
          <div className="text-lg leading-6 font-medium space-y-1">
            <p className="text-white text-xl font-bold">{person.name}</p>
            <p className="text-sm text-gray3">{person.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
