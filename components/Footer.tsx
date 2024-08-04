import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./LitUpButton";
import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/dedenkoesuma",
    },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/deden_koesuma",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/dedenkoesuma",
    },
  ];

  return (
    <footer className="relative w-full pt-20 pb-10 h-full text-white bg-cover bg-no-repeat" id="contact" style={{ backgroundImage: 'url("/footer-grid.svg")', backgroundPosition: 'center bottom' }}>
      <div className="relative flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to take <span className="text-blue-500">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-4 mb-5 text-base sm:text-lg">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:dedenkoesuma72@gmail.com">
          <LitUpButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center mt-16 w-full px-4">
        <p className="text-xs sm:text-sm md:text-base font-light md:mb-0 mb-6 sm:my-2">
          Copyright © 2024 Deden Koesuma
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-gray-700 mx-2 my-2"
            >
              <Image  src={info.img} alt="icons" className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
