import { FaPaintBrush, FaStore, FaUserCircle, FaUsers } from "react-icons/fa";

const Roadmap = () => {
  const roadMapInfo = [
    {
      title: "Advanced Character Development",
      icon: FaUserCircle,
      description: "AI-powered tool for creating deep, complex characters.",
    },
    {
      title: "E-book Platform Integration",
      icon: FaStore,
      description: "Seamless publishing to popular e-book platforms.",
    },
    {
      title: "Collaborative Writing",
      icon: FaUsers,
      description: "Co-create stories with other authors or AI assistants.",
    },
    {
      title: "AI Cover Art Generation",
      icon: FaPaintBrush,
      description: "Create stunning book covers with AI-generated art.",
    },
  ];
  return (
    <section
      id="roadmap"
      className="mt-20 bg-[#341b4b0d] rounded-xl px-8 py-12"
      aria-labelledby="roadmap-heading"
    >
      <h2 id="roadmap-heading" className="text-center font-bold text-2xl">
        Roadmap
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
        aria-describedby="roadmap-description"
      >
        {roadMapInfo.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4"
            role="article"
            aria-labelledby={`roadmap-item-title-${idx}`}
            aria-describedby={`roadmap-item-description-${idx}`}
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
                id={`roadmap-item-title-${idx}`}
                className="text-lg md:text-xl font-bold pb-1"
              >
                {item.title}
              </h3>
              <p
                id={`roadmap-item-description-${idx}`}
                className="text-base md:text-lg"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
