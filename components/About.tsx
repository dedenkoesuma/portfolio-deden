"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import { FlipWords } from "@/components/ui/flip-words";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./LitUpButton";

export function About() {
  const words = ["Journey", "Skills", "Passions", "Achievements"];
  return (
    <div
      className="h-[40rem] w-full flex flex-col md:flex-row items-center justify-center p-4 mb-10 bg-cover bg-no-repeat relative"
      id="about"
      style={{ backgroundImage: 'url("/footer-grid.svg")', backgroundPosition: 'center bottom' }}
    >
      {/* Bagian teks */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="text-4xl my-2 text-start font-bold text-white dark:text-white">
            Who I Am: <FlipWords words={words} className="text-blue-500" />
          </div>
          <h1 className="text-medium mt-4">
            Engineer, content creator, graphic designer, and photographer with over 100 design pieces and 15 websites created. Experienced leader in film production.
          </h1>
          <div className="text-left mt-4"> {/* Added class and margin-top */}
            <a href="https://drive.google.com/drive/folders/19x_WbSR0JJocw0Ctwc2NOgp7Gw3z82Ph?usp=drive_link">
              <LitUpButton
                title="See More My Projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bagian PinContainer */}
      <div className="flex-1 flex items-center justify-center p-4 mt-4 md:mt-0">
        <PinContainer
          title="Deden Koesuma"
          href="https://www.linkedin.com/in/dedenkoesuma"
          className=""
          containerClassName=""
        >
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 object-cover h-[20rem] w-[20rem] relative bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/image.jpg')" }}
          >
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
