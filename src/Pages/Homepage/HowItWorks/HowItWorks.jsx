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
    <section
      id="howItWorks"
      className="mt-20 bg-[#341b4b0d] rounded-xl px-8 py-12"
      aria-labelledby="how-it-works-heading"
    >
      <h2 id="how-it-works-heading" className="text-center font-bold text-2xl">
        How It Works
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10"
        aria-describedby="how-it-works-description"
      >
        {worksInfo.map((item, idx) => (
          <div
            className="flex items-start gap-4"
            key={idx}
            role="article"
            aria-labelledby={`work-item-title-${idx}`}
            aria-describedby={`work-item-description-${idx}`}
          >
            {/* icon */}
            <div
              className="flex items-center justify-center p-3 md:p-4 bg-gradient-1 rounded-full"
              aria-hidden="true"
            >
              <item.icon className="size-6" />
            </div>

            {/* info */}
            <div>
              <h3
                id={`work-item-title-${idx}`}
                className="text-xl font-bold pb-1"
              >
                {item.title}
              </h3>
              <p id={`work-item-description-${idx}`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
