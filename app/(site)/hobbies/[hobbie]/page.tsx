import { getHobbie } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { hobbie: string };
};

export default async function Hobbie({ params }: Props) {
  const slug = params.hobbie;
  const hobbie = await getHobbie(slug);

  return (
    <div >
      <header className="flex items-center justify-between">
        <h1
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
      bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"
        >
          {hobbie.name}
        </h1>

        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap
          hover:bg-pink-500 hover:text-pink-100 transition"
          href={hobbie.url}
          title="View Hobbie"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Hobbie
        </a>
      </header>

      {/*content goes here */}

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={hobbie.content} />
      </div>

      {/* Image goes here */}

      <div>
        <Image
          src={hobbie.image}
          alt={hobbie.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
