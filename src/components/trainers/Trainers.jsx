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
    header: "/img/mauroProf.JPG",
    className: "md:col-span-1",
  },
  {
    title: "Mateo Caranta",
    description: "Profesor - Sede Abasto",
    header: "/img/mateoProf.JPG",
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
    header: "/img/nicoProf.JPG",
    className: "md:col-span-1",
  },
  {
    title: "Valentin Cura",
    description:
      "Profesor - Sede Downtown",
    header: "/img/curaProf.JPG",
    className: "md:col-span-1",
  },
  {
    title: "Santiago Haquin",
    description:
      "Profesor - Sede San Martin",
    header: "/img/haquinProf.webp",
    className: "md:col-span-1",
  },
  {
    title: "Nicolas Abramovich",
    description:
      "Profesor - Sede Pichincha",
    header: "/img/nicoaProf.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Joaquin Benitez",
    description:
      "Profesor - Sede Lourdes",
    header: "/img/joacoProf.JPG",
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: "/img/profesJuntos.jpg",
    className: "md:col-span-3",
  },
];
