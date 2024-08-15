const Review = () => {
  return (
    <section id="howItWorks" className="mt-20 pb-12">
      <h2 className="text-center font-bold text-2xl pb-6">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-center">
        <div className="bg-[#ffffff0d] p-6 rounded-lg">
          <p>
            {` "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"`}
          </p>
          <h2 className="font-semibold">- Sarah J., Author</h2>
        </div>
        <div className="bg-[#ffffff0d] p-6 rounded-lg">
          <p>
            {` "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."`}
          </p>
          <h2 className="font-semibold">- Mark T., Aspiring Writer</h2>
        </div>
      </div>
      <div className="bg-[#ffffff0d] rounded-xl px-8 py-12 text-center mt-20    ">
        <div>
          <h2 className="font-bold text-2xl pb-6">Stay Updated</h2>
          <p>
            Subscribe to our newsletter for the latest AI writing tips and
            BookAI updates.
          </p>
        </div>
        <div className="pt-6">
            <input type="text"  className="bordered py-3 md:w-1/3 rounded-r-md md:rounded-r-none rounded-l-md mb-2 text-black px-3"/>
            <button className="bg-gradient-1 px-5 py-3 rounded-md md:rounded-l-none">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Review;
