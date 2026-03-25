import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="items-center flex justify-center flex-col  text-center min-h-screen max-w-sm sm:max-w-4xl mx-auto gap-8">
      <h1 className="uppercase text-4xl sm:text-6xl lg:text-8xl font-bold">
        Architecting the Future of{" "}
        <span className="text-blue-600">Capital</span> and{" "}
        <span className="text-green-500">Innovation</span>
      </h1>
      <p className="max-w-xs sm:max-w-2xl lg:max-w-xl">
        Stacbridge Holdings is a privately-held parent holding company
        positioned at the intersection of transformative technology, strategic
        heavy-asset investments, and long-term value creation. Explore Our
        Vision Contact Us
      </p>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <Button className="h-12 sm:h-14 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase px-6 sm:px-8 rounded-none transition-colors">
          Explore Our Vision
        </Button>

        <Button
          variant="outline"
          className="h-12 sm:h-14 md:h-16 border-2 border-gray-800 hover:bg-gray-100 font-bold uppercase px-6 sm:px-8 rounded-none transition-colors cursor-pointer"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
