const Footer = () => {
  const footerItem = [
    {
      title: "Terms of Service",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Contact Us",
    },
  ];
  return (
    <div
      className="c-container border border-t-[#FFFFFF1A] border-x-0 border-b-0"
      aria-labelledby="footer-info"
    >
      <p id="footer-info" className="text-center pb-1">
        © 2024 BookAI. All rights reserved.
      </p>
      <ul
        className="flex text-[#b3b3b3] items-center justify-center gap-7 pb-3"
        aria-label="Footer navigation"
      >
        {footerItem.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer font-light transition-colors duration-300 ease-linear hover:text-[#fff]"
            aria-label={item.title}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
