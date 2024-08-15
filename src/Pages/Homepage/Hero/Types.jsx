import { FaRobot, FaBook, FaDownload, FaLanguage } from "react-icons/fa";
const Types = () => {
  const typesInfo = [
    {
      title: "AI-Powered Writing",
      icon: FaRobot,
      description: "Generate high-quality content with advanced AI technology",
    },
    {
      title: "Custom Genres",
      icon: FaBook,
      description: "Create stories in any genre or blend multiple styles.",
    },
    {
      title: "Instant Download",
      icon: FaDownload,
      description: "Get your completed book in various formats instantly.",
    },
    {
      title: "Multilingual",
      icon: FaLanguage,
      description: "Generate content in multiple languages effortlessly.",
    },
  ];
  return (
    <section className="mt-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {typesInfo.map((item, index) => (
        <div className="space-y-5 transition duration-300 hover:-translate-y-4 cursor-pointer" key={index}>
          <div className="flex items-center justify-center">
            <div className="bg-gradient-2 p-4 rounded-full">
              <item.icon className="size-7 " />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Types;
