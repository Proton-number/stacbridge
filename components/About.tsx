export default function About() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Institutional Identity
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Stacbridge Holdings
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            Stacbridge Holdings serves as the central governance and capital
            allocation hub for a diverse portfolio of market-leading
            enterprises. Our structure is built for long-term resilience,
            balancing stability with the ability to adapt in the face of rapid
            technological change.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We operate beyond the constraints of short-term financial cycles,
            focusing instead on the foundational pillars of the global economy.
            These include digital infrastructure, essential heavy assets, and
            the evolving frontier of artificial intelligence governance.
          </p>
        </div>

        <div className="mt-16 border-t pt-10">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 max-w-3xl">
            Built for generational continuity. Positioned for technological
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
