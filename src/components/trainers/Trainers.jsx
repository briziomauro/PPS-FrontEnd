import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { div } from "framer-motion/client";


export default function BentoGridSecondDemo() {
  return (
    <div id="Trainers" className="flex min-h-screen justify-center items-center mb-20">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] mt-32">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Mauro Brizio",
    description: "Profesor - Sede Centro",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "Mateo Caranta",
    description: "Profesor - Sede Abasto",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "CONOCE NUESTRO STAFF",
    description: "¡Nunca dudes en pedirles ayuda cuando lo necesites!",
    className: "md:col-span-2",
  },
  {
    title: "Nicolas Arrastia",
    description:
      "Profesor - Sede Norte",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "Valentin Cura",
    description:
      "Profesor - Sede Downtown",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "Santiago Haquin",
    description:
      "Profesor - Sede San Martin",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "Nicolas Abramovich",
    description:
      "Profesor - Sede Pichincha",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "Joaquin Benitez",
    description:
      "Profesor - Sede Lourdes",
    header: "",
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: "",
    className: "md:col-span-3",
  },
];
