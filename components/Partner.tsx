import { Button } from "./ui/button";

export default function Partner() {
  return (
    <section className="items-center flex justify-center flex-col  text-center  max-w-sm sm:max-w-4xl mx-auto gap-8 py-20">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
        Building Institutions for the Future
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
        Stacbridge Holdings is designed to operate as a long-term capital and
        governance platform bridging innovation, strategic investment, and
        sustainable enterprise growth.
      </p>

      <Button
        className="h-12 sm:h-14 md:h-16 border-2 border-gray-800 hover:bg-gray-100 font-bold uppercase px-6 sm:px-8 rounded-none transition-colors cursor-pointer"
        variant="outline"
      >
        Initiate Partnership
      </Button>
    </section>
  );
}
