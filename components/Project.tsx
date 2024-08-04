import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Project() {
  return (
    <>
    <div id="project">
    <div className="text-4xl mx-auto text-center my-4 font-normal text-white dark:text-white">
        Tech enthusiast with a passion for development.
    </div>
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project2.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project3.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);
const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project4.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);
const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project5.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);
const Skeleton6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project6.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);
const Skeleton7 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" style={{ backgroundImage: 'url(project7.jpg)',backgroundSize:'cover' }} aria-label="Project Image"></div>
);

const items = [
  {
    title: "Instructor Led Managment",
    description: "instructional web application to organize schedules and questions with golang and javascript.",
    header: <Skeleton />,
    icon: '',
  },
  {
    title: "PT Timbul Terus Tenar Website",
    description: "create a web-based company profile for cutting tools companies, safety tools.",
    header: <Skeleton2 />,
    icon: '',
  },
  {
    title: "Legality Lawfirm Website",
    description: "creating a web-based company profile for legality companies",
    header: <Skeleton3 />,
    icon: "",
  },
  {
    title: "OneDream Website",
    description:
      "creating a web-based company profile for a digital agency",
    header: <Skeleton4 />,
    icon: '',
  },
  {
    title: "RSUD Cilegon Website",
    description: "create a website for a government service in the city of cilegon, namely rsud cilegon.",
    header: <Skeleton5 />,
    icon: '',
  },
  {
    title: "Natwafe Dashboard",
    description: "An application to display, calculate and know the details of water with the help of tools, namely the Multiparameter Water Quality Meter.",
    header: <Skeleton6 />,
    icon: '',
  },
  {
    title: "Pakarangan Website",
    description: "creating a web-based company profile for restaurants and glamping.",
    header: <Skeleton7 />,
    icon: '',
  },
];
