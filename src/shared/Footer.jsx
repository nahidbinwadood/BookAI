 
const Footer = () => {
    const footerItem=[
        {
            title:"Terms of Service" 
        },
        {
            title:"Privacy Policy"
        },
        {
            title:"Contact Us"
        }
    ]
    return (
        <div className="c-container border border-t-[#FFFFFF1A] border-x-0 ">
             
            <p className="text-center pb-1">© 2024 BookAI. All rights reserved.</p>
            <ul className="flex text-[#b3b3b3] items-center justify-center gap-7 pb-3">               
                 {
                    footerItem.map(item=> <li className="cursor-pointer font-light transition-colors duration-300 ease-linear hover:text-[#fff]" key={item}>{item.title}</li>)
                 }
            </ul>
        </div>
    );
};

export default Footer;