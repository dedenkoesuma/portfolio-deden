"use client";
import React from "react";
import { Section } from "../../components/Section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Project } from "components/Project";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconBrandMessenger,
  IconHome,
  IconUser,
  IconBriefcase,
  IconHistory
} from "@tabler/icons-react";
import { About } from "components/About";
import { Experience } from "components/Experience";
import Footer from "components/Footer";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#project",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconHistory className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconBrandMessenger className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <>
      <FloatingNav  navItems={navItems} className="" />
        <Section/>
        <About/>
        <TracingBeam >
          <Project />
        </TracingBeam>
        <Experience/>
        <Footer/>
    </>
  );
}
  