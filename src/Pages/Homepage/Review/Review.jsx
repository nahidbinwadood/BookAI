const Review = () => {
  return (
    <section
      id=""
      className="mt-20 pb-12"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-center font-bold text-2xl pb-6"
      >
        What Our Users Say
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-center"
        aria-describedby="user-feedback-description"
      >
        <div
          className="bg-[#ffffff0d] p-6 rounded-lg"
          role="blockquote"
          aria-labelledby="user-feedback-1-author"
          aria-describedby="user-feedback-1-content"
        >
          <p id="user-feedback-1-content">
            {` "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"`}
          </p>
          <h3 id="user-feedback-1-author" className="font-semibold">
            - Sarah J., Author
          </h3>
        </div>
        <div
          className="bg-[#ffffff0d] p-6 rounded-lg"
          role="blockquote"
          aria-labelledby="user-feedback-2-author"
          aria-describedby="user-feedback-2-content"
        >
          <p id="user-feedback-2-content">
            {` "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."`}
          </p>
          <h3 id="user-feedback-2-author" className="font-semibold">
            - Mark T., Aspiring Writer
          </h3>
        </div>
      </div>
      <div
        className="bg-[#ffffff0d] rounded-xl px-8 py-12 text-center mt-20"
        aria-labelledby="stay-updated-heading"
      >
        <div>
          <h2 id="stay-updated-heading" className="font-bold text-2xl pb-6">
            Stay Updated
          </h2>
          <p>
            Subscribe to our newsletter for the latest AI writing tips and
            BookAI updates.
          </p>
        </div>
        <div className="pt-6">
          <input
            type="text"
            className="bordered dark:text-white py-3 md:w-1/3 rounded-r-md md:rounded-r-none rounded-l-md mb-2 text-black px-3"
            aria-label="Email address"
          />
          <button
            className="bg-gradient-1 px-5 py-3 rounded-md md:rounded-l-none"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
