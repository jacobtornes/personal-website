import { getHobbies, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const hobbies = await getHobbies();

  return (
    <div>
      <div className="flex ">
        <div className="mr-4">

          
          <h1> Full-stack developer</h1>
          <h1 className="text-4xl font-extrabold">
            Hello, my name is <br></br>
            <span
              className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
      bg-clip-text text-transparent"
            >
            Jacob Tornes
            </span>
            !
          </h1>

          <p className="mt-4 text-xl text-gray-600 w-80">
            Developer from Norway eager to face challenges and
            discover new things. 
          </p>
        </div>

        <Image
          className="object-contain rounded-lg" //object-contain trengs kanskje ikke.
          src={"/Images/cv_bilde.jpg"}
          alt="picture of Jacob"
          width={200}
          height={200}
        ></Image>
      </div>

      {/* <div className="flex items-center">
      <h1 className="text-2xl mr-4">Your Text Here</h1>
      <img src="path/to/image.jpg" alt="description" className="w-16 h-16"/>
    </div> */}

      {/* <div className="flex justify-end">
        <Image
          className="object-contain rounded-lg" //object-contain trengs kanskje ikke.
          src={"/Images/cv_bilde.jpg"}
          alt="picture of Jacob"
          width={200}
          height={200}
        ></Image>
      </div> */}

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 
            hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div
              className="mt2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500
          to-purple-600 bg-clip-text text-transparent"
            >
              {project.name}
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Hobbies</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbies.map((hobbie) => (
          <Link
            href={`/hobbies/${hobbie.slug}`}
            key={hobbie._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 
            hover:border-blue-500 transition"
          >
            {hobbie.image && (
              <Image
                src={hobbie.image}
                alt={hobbie.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div
              className="mt2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500
          to-purple-600 bg-clip-text text-transparent"
            >
              {hobbie.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
