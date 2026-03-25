import Image from "next/image";
export default function Architects() {
  const architects = [
    {
      name: "Iroanya Smith Michael",
      title: "Founder & Chairman",
      image: "/img1.jpg",
      bio: [
        "Founder | Financial Strategist | Innovation-Driven Executive",
        "Iroanya Smith Michael is a financial strategist and startup executive with over five years of experience in financial management, strategic planning, and venture development. He is the Founder and CEO of Nearest Me, a platform focused on connecting Africa’s workforce through proximity-driven solutions.",
        "He also leads Stacbridge Holdings, an investment company driving innovation across technology and scalable industries. With expertise in financial structuring, business development, and growth systems, Smith is committed to building ventures that deliver long-term economic impact across Africa.",
      ],
    },
    {
      name: "Adeoye Samuel",
      title: "Co-Founder",
      image: "/img2.jpg",
      bio: [
        "Co-Founder & Executive Director, Strategy & Corporate Development",
        "Adeoye Samuel is Co-Founder and Executive Director at Stacbridge Holdings, where he leads enterprise strategy, corporate positioning, and portfolio growth.",
        "He specializes in venture structuring, institutional branding, and scalable business frameworks, working closely with leadership to translate vision into execution. His focus is on strategic partnerships, ecosystem development, and building resilient, growth-driven enterprises.",
      ],
    },
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
              <div className="text-sm text-gray-600 space-y-2 mt-2">
                {a.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
