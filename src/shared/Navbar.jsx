 
const Navbar = () => {
    const navItems=[
        {
            title:"Features",
            location:"features"
        },
        {
            title:"How It Works",
            location:"howItWorks"
        },
        {
            title:"RoadMap",
            location:"roadmap"
        },
        {
            title:"API",
            location:"api"
        },
        {
            title:"Price",
            location:"price"
        },
        {
            title:"Models",
            location:"models"
        },
    ]
    return (
        <div className="c-container flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between mt-5">
             <div className="flex items-center">
                <div className="h-[30px] w-[30px] rounded-full mr-3 bg-[linear-gradient(45deg,#726bff,#57b6fe)]"></div>
                <div className="flex items-center">
                    <img className="w-[50px]" src="/logo.png" alt="" />
                    <h2 className="font-bold  text-2xl">BookAI</h2>
                </div>
             </div>
             <div  >
                <ul className="flex flex-wrap gap-6 items-center">                    
                    {
                        navItems.map(item=> <li className=" cursor-pointer font-light transition-colors duration-300 ease-linear hover:text-[#8a2be2]" id={item.location} key={item}>{item.title}</li>)
                    }
                    <button className="bg-[linear-gradient(45deg,#726bff,#57b6fe)]  px-5  py-3 rounded-md">Login / Sign Up</button>
                </ul>
             </div>
        </div>
    );
};

export default Navbar;