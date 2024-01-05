import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl xl:px-0 px-5 flex flex-col gap-10 mx-auto ">
      <h1 className="font-bold text-5xl text-center my-14">About us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center items-center   justify-center">
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium">
              About Achary Kalki Krishnan Ji{" "}
            </p>
            <p className="text-xl font-medium">
              Best Vastu Expert in India & Abroad
            </p>
          </div>
          <div className="flex ">
            <p className="text-wrap">
              Achary Kalki Krishnan Ji has been teaching and practicing Vastu
              Shastra for over 30 years. He has a Masters degree in business,
              astrology, buildings, ancient wisdom, rituals, and more. He is the
              founder of the ‘AstroVastu’ technique, a unique combination of the
              principles of Astrology and Vastu Shastra. The years of research
              and practice in Vastu Shastra have helped Achary ji develop the
              most result-oriented approach for removing Vastu defects in an
              area. Also, he has successfully handled many prestigious and big
              projects with complicated Vastu layouts. He has a rich experience
              of working in big companies and even for the government of India!
              He has received over 100 awards from different organizations for
              being the Best Vastu Consultant in India!{" "}
            </p>
          </div>
          <button className="px-4 w-44 text-white mx-5 text-start flex items-center justify-center mt-6 py-3 text-xl font-semibold  bg-[#3c8dff]">
            Read more
          </button>
        </div>
        <img
          src="https://www.astrodevam.com/media/wysiwyg/best-vastu-services-delhi-ncr.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center items-center   justify-center">
        <img src="https://www.astrodevam.com/media/wysiwyg/vastu.png" alt="" />
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium">Online Vastu Consultation</p>
          </div>
          <div className="flex ">
            <p className="text-wrap">
              Achary Kalki Krishnan Ji excels in both on-site visits and Online
              Vastu Consultations. If you are seeking a highly qualified Online
              Vastu Consultant, your search ends with Achary Kalki Krishnan Ji.
              He is successfully providing his best Vastu Services Online to
              more than 120 countries. Whether you are looking for Online Vastu
              Consultation for your home, office, or industry, you can
              conveniently schedule an online appointment. Utilizing Google Maps
              and a geopositioning system, he offers impeccable No Demolition
              Best Vastu Services. By conducting a thorough analysis of your
              plot or building, he recommends and implements effective Vastu
              Correction Remedies. The Online Vastu Consultancy Fee is
              reasonable, ensuring you receive the best value for his
              exceptional services.
            </p>
          </div>
          <button className="px-4 w-44 text-white mx-5 text-start flex items-center justify-center mt-6 py-3 text-xl font-semibold  bg-[#3c8dff]">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
