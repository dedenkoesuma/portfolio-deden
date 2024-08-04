import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";

export function Experience() {
    const words = ["Experience", "Works", "Career", "Practices"];
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10" id="experience">
       <div className="text-4xl mx-auto text-center font-normal text-white dark:text-white">
            My Profesional  <FlipWords words={words} className="text-blue-500" />
        </div>
      <HoverEffect items={experiences}  className=''/>
    </div>
  );
}
export const experiences = [
  {
    title: "Software Engineer Intern - Berani Digital ID",
    description:
      "Contributed significantly to the creation of a dynamic and interactive web-based platform, enhancing user engagement and improving overall functionality.",
    link: "https://beranidigital.id/",
  },
  {
    title: "Content Creator - Magic Studio",
    description:
      "As a content creator, of course my job is to develop content ideas, take video footage and edit the content. ",
    link: "https://magicstudio.id/",
  },
  {
    title: "Multimedia Staff - PT Startx Digital Indonesia",
    description:
      "has a critical role that must continuously collaborate with cross-functional teams to ensure cohesive and engaging visual communication, enhancing the overall user experience.",
    link: "https://startxindonesia.co.id/",
  },
  {
    title: "Fullstack Developer - Onedream Creative Indonesia",
    description:
      "Played a crucial role in bridging the gap between the design and technical implementation ",
    link: "https://onedream.id/",
  },
  {
    title: "Multimedia Staff Intern - Diskominfo Provinsi Banten",
    description:
      "as a multimedia person I always Assist in the production of videos, graphics and social media content to enhance the agency's communication efforts.",
    link: "https://diskominfo.bantenprov.go.id/",
  },
  {
    title: "Fullstack Developer - Legality LawFirm",
    description:
      "Led the development of a web-based app for a client, from initial concept to deployment.",
    link: "#",
  },
];
