const Banner = () => {
  return (
    <section
      className="text-center space-y-6"
      aria-labelledby="explore-heading"
      aria-describedby="explore-description explore-attention"
    >
      {/* Heading */}
      <div className="text-4xl lg:text-5xl font-bold">
        <h1 id="explore-heading">
          Explore the Possibilities of 
          <span
            className="bg-gradient-2 ml-2 bg-clip-text text-transparent lg:border-b-4 lg:border-b-[#726bff]"
            aria-label="AI Book Writing Highlighted"
          >
            AI Book Writing
          </span>
          with
        </h1>
        <h2 className="mt-2">BookAI</h2>
      </div>

      {/* Description */}
      <div
        id="explore-description"
        className="lg:w-3/4 mx-auto text-lg text-[#b3b3b3]"
      >
        <p>Unleash the power of AI to create captivating books in minutes.</p>
        <p>
          Download, Distribute wherever you want. Generate unlimited free <br />
          books
        </p>
      </div>

      {/* Buttons */}
      <div>
        <button
          className="bg-[linear-gradient(45deg,#726bff,#57b6fe)] duration-500 transition-transform transform hover:-translate-y-1 px-8 py-3 rounded-full mr-1 mb-2 font-bold"
          aria-label="Get Started with AI Book Writing"
        >
          Get Started
        </button>
        <button
          className="bg-[linear-gradient(45deg,#726bff,#57b6fe)] duration-500 transition-transform transform hover:-translate-y-1 px-8 py-3 rounded-full mr-1 mb-2 font-bold"
          aria-label="Get API Access for AI Book Writing"
        >
          Get API Access
        </button>
      </div>

      {/* Attention */}
      <p id="explore-attention" className="dark:text-[#FAF901]">
        Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
        be used for text and image generation.
      </p>
    </section>
  );
};

export default Banner;
