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
    <section id="roadmap" className="mt-20 bg-[#ffffff0d] rounded-xl px-8 py-12">
      <h2 className="text-center font-bold text-2xl">Roadmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {roadMapInfo.map((item, idx) => (
          <div className="flex items-start gap-4" key={idx}>
            {/* icon */}
            <div className="flex items-center justify-center p-3 md:p-4 bg-gradient-1 rounded-full">
              <item.icon className="size-6" />
            </div>

            {/* info */}
            <div>
              <h2 className=" text-lg md:text-xl font-bold pb-1">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
