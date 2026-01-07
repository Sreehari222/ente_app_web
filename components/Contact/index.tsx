import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden py-10 md:py-16 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white px-5 py-7 sm:px-8 sm:py-9 lg:mb-5 xl:p-12">
              <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl xl:text-3xl">
                Need Help? Get in touch!
              </h2>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark md:px-6 md:py-3 md:text-base"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark md:px-6 md:py-3 md:text-base"
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Your Contact
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your contact"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark md:px-6 md:py-3 md:text-base"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Your Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your subject"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark md:px-6 md:py-3 md:text-base"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Enter your message"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark md:px-6 md:py-3 md:text-base"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-6 py-2 text-sm font-medium text-white duration-300 hover:bg-primary/90 md:px-9 md:py-4 md:text-base">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
