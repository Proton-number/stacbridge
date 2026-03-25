import Image from "next/image";
import React from "react";
export default function Architects() {
  const architects = [
    {
      name: "Iroanya Smith Michael",
      title: "Founder & Chairman",
      image: "/img1.png",
    },
    { name: "Adeoye Samuel", title: "Co-Founder", image: "/img2.png" },
  ];

  return (
    <section className=" items-center justify-center flex flex-col px-6 md:px-12 lg:px-44">
      <div className="space-y-6">
        <h2 className="uppercase text-center text-xs md:text-sm tracking-widest text-gray-500">
          The Architects
        </h2>

        <h1 className="font-bold uppercase text-center text-2xl md:text-4xl lg:text-5xl leading-tight">
          Executive Leadership
        </h1>
        <div className="w-full h-1 bg-black" />
      </div>
      <div className="flex flex-col md:flex-row gap-12 mt-12">
        {architects.map((a) => (
          <div key={a.name} className="flex flex-col gap-4 w-full md:w-[45%]">
            <Image
              src={a.image}
              width={1000}
              height={600}
              alt={a.name}
              className="w-full h-75 sm:h-150 object-cover grayscale-75 hover:grayscale-0 transition duration-300 rounded-lg"
            />

            <div className="text-left">
              <h3 className="font-semibold text-xl">{a.name}</h3>
              <p className="text-gray-500">{a.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
