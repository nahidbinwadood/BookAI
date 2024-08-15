import { FaCheckCircle, FaCogs, FaMagic, FaPencilAlt } from "react-icons/fa";

const HowItWorks = () => {
  const worksInfo = [
    {
      title: "Choose Your Genre",
      icon: FaMagic,
      description:
        "Select from a wide range of genres or create a custom blend.",
    },
    {
      title: "Provide Key Details",
      icon: FaPencilAlt,
      description:
        "Input main characters, plot points, or themes to guide the AI.",
    },
    {
      title: "AI Generation",
      icon: FaCogs,
      description: "Our advanced AI creates your book based on your inputs.",
    },
    {
      title: "Review and Download",
      icon: FaCheckCircle,
      description:
        "Review your generated book and download in your preferred format.",
    },
  ];
  return (
    <section id="howItWorks" className="mt-20 bg-[#ffffff0d] rounded-xl px-8 py-12">
      <h2 className="text-center font-bold text-2xl">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {worksInfo.map((item, idx) => (
          <div className="flex items-start gap-4" key={idx}>

            {/* icon */}
            <div className="flex items-center justify-center p-3 md:p-4 bg-gradient-1 rounded-full">
              <item.icon className="size-6" />
            </div>

            {/* info */}
            <div>
              <h2 className="text-xl font-bold pb-1">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
