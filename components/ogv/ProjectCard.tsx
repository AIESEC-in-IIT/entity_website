import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, image, sdg_image, description, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl mx-auto mb-6">
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Image
            src={sdg_image}
            alt="SDG Goal"
            width={120}
            height={120}
            className="mr-4"
          />
          <h2 className="text-4xl font-bold text-black">{title}</h2>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-center mt-6">
          <Link href={link}>
            <button className="bg-aiesec-blue hover:bg-ogv-orange text-white py-2 px-6 rounded-lg text-base hover:scale-105 transition-all duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}