import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Clinicly, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>

          <p>
            Clinicly is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <b className="text-gray-800">Our Vision</b>

          <p>
            Our vision at Clinicly is to create a seamless healthcare experience
            for everyone by bridging the gap between patients and healthcare
            providers, making it easier for you to access the care you need,
            when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-8">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
        {/* Efficiency */}
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
                text-gray-600 cursor-pointer
                hover:bg-[rgb(var(--color-primary))] hover:text-white
                transition-all duration-300"
        >
          <b className="text-gray-800">EFFICIENCY:</b>
          <p className="text-sm text-gray-600 mt-3">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        {/* Convenience */}
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
                text-gray-600 cursor-pointer
                hover:bg-[rgb(var(--color-primary))] hover:text-white
                transition-all duration-300"
        >
          <b className="text-gray-800">CONVENIENCE:</b>
          <p className="text-sm text-gray-600 mt-3">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        {/* Personalization */}
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
                text-gray-600 cursor-pointer
                hover:bg-[rgb(var(--color-primary))] hover:text-white
                transition-all duration-300"
        >
          <b className="text-gray-800">PERSONALIZATION:</b>
          <p className="text-sm text-gray-600 mt-3">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
