const Price = () => {
  return (
    <section
      id="price"
      className="mt-20 bg-[#341b4b0d] px-4 py-5 md:px-8 md:py-12 rounded-md border border-[#334155]"
      aria-labelledby="api-pricing-heading"
    >
      <div>
        <h2
          id="api-pricing-heading"
          className="text-[#a5b4fc] mt-5 font-bold text-xl md:text-2xl"
        >
          API Pricing
        </h2>
        <p className="mt-1 text-sm md:text-base">
          {`Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:`}
        </p>
      </div>

      {/* Table */}
      <div className="mt-6 rounded-md overflow-hidden border border-[#334155]">
        <table
          className="min-w-full leading-normal"
          aria-describedby="api-pricing-heading"
        >
          <thead>
            <tr className="bg-[#6366f1]">
              <th
                scope="col"
                className="text-xs md:text-base p-3 md:px-5 md:py-4 font-semibold text-start"
              >
                API
              </th>
              <th
                scope="col"
                className="text-xs md:text-base p-3 md:px-5 md:py-4 font-semibold text-start"
              >
                Model
              </th>
              <th
                scope="col"
                className="text-xs md:text-base p-3 md:px-5 md:py-4 font-semibold text-start"
              >
                Price per 1K tokens
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#334155]">
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                OpenAI
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                GPT-3.5
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                $0.002
              </td>
            </tr>
            <tr className="border-b border-[#334155]">
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                OpenAI
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                GPT-4
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                $0.03
              </td>
            </tr>
            <tr className="border-b border-[#334155]">
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                Together AI
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                Llama-2-70b
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                $0.0008
              </td>
            </tr>
            <tr className="rounded-b-md">
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                Together AI
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                Llama-2-13b
              </td>
              <td className="text-xs md:text-base p-3 md:px-5 md:py-4">
                $0.0006
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div>
          <h2
            id="token-estimation-heading"
            className="text-[#a5b4fc] mt-5 font-bold text-xl md:text-xl"
          >
            Token Estimation
          </h2>
          <p className="mt-1 text-sm md:text-base">
            {`On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.`}
          </p>
        </div>
        <div>
          <h2
            id="billing-heading"
            className="text-[#a5b4fc] mt-5 font-bold text-xl md:text-xl"
          >
            Billing
          </h2>
          <p className="mt-1 text-sm md:text-base">
            {`You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Price;
