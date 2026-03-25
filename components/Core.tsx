import { Card } from "./ui/card";

export default function Core() {
  const cores = [
    {
      title: "Transformative Technology",
      description:
        "Engineering the next generation of digital platforms and autonomous intelligence systems that redefine industry standards.",
    },
    {
      title: "Strategic Asset Investments",
      description:
        "Focusing on high-barrier resilient sectors and heavy industrial assets that provide the backbone for global commerce.",
    },
    {
      title: "Institutional Governance",
      description:
        "Implementing rigorous strategic oversight and framework-driven management to ensure sustainable value creation.",
    },
  ];
  return (
    <section className="w-full px-6 md:px-12 lg:px-44">
      {/* Label */}
      <h2 className="text-green-500 uppercase font-semibold tracking-widest text-sm md:text-base mb-2">
        Core Competencies
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl leading-tight">
          Strategic Focus Areas
        </h1>

        {/* Supporting subheading */}
        <div className="text-gray-600 max-w-md">
          <p className="uppercase text-sm md:text-base tracking-wide">
            Precision deployment of institutional capital
          </p>
          <div className="w-full h-0.5 bg-gray-300 mt-2" />
        </div>
      </div>

      {/* Cards */}
      <div className="py-20">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cores.map((c) => (
            <Card
              key={c.title}
              className="p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 rounded-lg bg-white hover:shadow-lg flex flex-col gap-4"
            >
              <h2 className="text-lg font-semibold tracking-tight">
                {c.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {c.description}
              </p>
              <div className="w-10 h-1 bg-black mt-2" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
