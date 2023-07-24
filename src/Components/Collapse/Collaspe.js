import React from "react";
import { Collapse, Text } from "@nextui-org/react";
import CollapseData from "@/data/CollapseData";
import BookFlight from "../BookFlight";

export default function CollapseComponent() {
  // Utilisation de la méthode map
  const collapseItems = CollapseData.map((item, index) => (
    <Collapse
      key={index}
      // Le titre de l'élément Collapse est défini à partir de la propriété "title" de chaque élément dans "CollapseData".
      title={item.title}
      className="font-bold text-2xl lg:text-4xl"
    >
      {/* Le contenu de l'élément Collapse est défini ici à partir de la propriété "content" de chaque élément dans "CollapseData". */}
      <Text className="font-normal lg:max-w-[41.6vw] lg:ml-[45.8vw]">
        {item.content}
      </Text>
    </Collapse>
  ));
  return (
    <>
      <div className="mx-auto max-w-[90%] py-10 border-b-2 border-[#000] mb-10">
        {/* On regroupe ici tous les éléments Collapse générés précédemment, formant ainsi un ensemble d'accordéons. */}
        <Collapse.Group>{collapseItems}</Collapse.Group>
      </div>
      <div className="lg:pt-20">
        <BookFlight />
      </div>
    </>
  );
}
