"use client";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

export function Section() {
  const logos = [
    { src: "/laravel.svg", alt: "Laravel", title: "Laravel" },
    { src: "/next.svg", alt: "Next.js", title: "Next.js" },
    { src: "/react.svg", alt: "React", title: "React" },
    { src: "/vue.svg", alt: "Vue.js", title: "Vue.js" },
    { src: "/golang.svg", alt: "Golang", title: "Golang" },
    { src: "/angular.svg", alt: "Angular.js", title: "Angular" },
    { src: "/php.svg", alt: "Php", title: "Php Native" },
    { src: "/js.svg", alt: "js", title: "Javascript" },
    { src: "/ts.svg", alt: "ts", title: "Typecript" },
    { src: "/cSharp.svg", alt: "C#", title: "C#" },
    { src: "/c++.svg", alt: "c++", title: "C++" },
  ];

  return (
    <div id="home">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Hi! I&apos;m Deden Koesuma, I&apos;m a Content Creator &<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Web Developer
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/image1.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      
      {/* Swiper Slider for logos */}
      <div className="mt-2 w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 10 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-2" style={{marginBottom: '2rem'}}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={50}
                  width={50}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
