import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-zinc-900 text-white px-10 py-8 h-screen flex flex-col md:flex-row item-center justify-center">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          About Us
        </h1>
        <p className="mt-4 text-xl text-zinc-200 text-center lg:text-left">
          Welcome to our library, where a love for books meets a passion for
          learning. We are committed to offering a diverse collection of books
          that cater to all interests, ages, and backgrounds.
        </p>
        <p className="mt-4 text-xl text-zinc-200 text-center lg:text-left">
          Our mission is to foster a community of readers, provide access to
          valuable resources, and create an inviting space where knowledge is
          shared and celebrated.
        </p>
        <p className="mt-4 text-xl text-zinc-200 text-center lg:text-left">
          Visit us today, and become a part of our vibrant community!
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-yellow-500 hover:text-white transition rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img className="lg:px-10 mt-9 rounded"
          src="../public/img/about us.png"
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutUs;
