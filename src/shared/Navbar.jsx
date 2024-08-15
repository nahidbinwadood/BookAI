import { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Features",
      location: "features",
    },
    {
      title: "How It Works",
      location: "howItWorks",
    },
    {
      title: "RoadMap",
      location: "roadmap",
    },
    {
      title: "API",
      location: "api",
    },
    {
      title: "Price",
      location: "price",
    },
    {
      title: "Models",
      location: "models",
    },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("light");
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div
      className="c-container flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between pt-5"
      aria-labelledby="header-content"
    >
      <div className="flex items-center">
        <div
          className="h-[30px] w-[30px] rounded-full mr-3 bg-[linear-gradient(45deg,#726bff,#57b6fe)]"
          aria-hidden="true"
        ></div>
        <div className="flex items-center">
          <img
            className="w-[50px]"
            src="/logo.png"
            alt="BookAI Logo"
            aria-labelledby="bookai-logo"
          />
          <h1 id="bookai-logo" className="font-bold text-2xl">
            BookAI
          </h1>
        </div>
      </div>
      <nav>
        <ul
          className="flex flex-wrap gap-6 items-center"
          aria-label="Navigation menu"
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.location}`}
                className="cursor-pointer font-light transition-colors duration-300 ease-linear hover:text-[#8a2be2]"
                aria-label={item.title}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <button
              className="bg-[linear-gradient(45deg,#726bff,#57b6fe)] px-5 py-3 rounded-md"
              aria-label="Login or Sign Up"
            >
              Login / Sign Up
            </button>
          </li>
          <li>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
