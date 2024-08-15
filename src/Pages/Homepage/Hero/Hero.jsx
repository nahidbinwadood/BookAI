const Hero = () => {
  return (
    <section id="features" className="mt-20 bg-[#ffffff0d] p-10 md:p-7 rounded-xl relative">

        {/* Top left  */}
      <div className="bg-[#FFFFFF0D] bg-opacity-30 backdrop-blur-md absolute top-5 left-5 flex items-center p-3 rounded-xl z-10">
        <div className="h-[30px] w-[30px] rounded-full mr-3 bg-[linear-gradient(45deg,#726bff,#57b6fe)]"></div>
        <img
          className="w-[90px] h-[130px] rounded-xl transition duration-300 hover:scale-105"
          src="/miniBanner.png"
          alt=""
        />
      </div>

      {/* Main Banner */}
      <div className="md:px-5 md:py-6">
        <img
          className="rounded-lg transition duration-300 hover:scale-105"
          src="/bannerHero.png"
          alt=""
        />
      </div>

      {/* Bottom Right */}

      <div className="bg-[#FFFFFF0D] bg-opacity-30 backdrop-blur-md absolute bottom-5 right-5 flex items-center p-3 rounded-xl z-10">
        <div className="h-[30px] w-[30px] rounded-full mr-3 bg-[linear-gradient(45deg,#726bff,#57b6fe)]"></div>
         <h2>Chapter complete</h2>
      </div>
    </section>
  );
};

export default Hero;
