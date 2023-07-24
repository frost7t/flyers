import React from "react";
import { Collapse, Text } from "@nextui-org/react";
import CollapseData from "@/data/CollapseData";
import BookFlight from "../BookFlight";

export default function Collaspe() {
  const collapseItems = CollapseData.map((item, index) => (
    <Collapse
      key={index}
      title={item.title}
      className="font-bold text-2xl lg:text-4xl"
    >
      <Text className="font-normal lg:max-w-[41.6vw] lg:ml-[45.8vw]">
        {item.content}
      </Text>
    </Collapse>
  ));
  return (
    <>
      <div className="mx-auto max-w-[90%] py-10 border-b-2 border-[#000] mb-10">
        <Collapse.Group>{collapseItems}</Collapse.Group>
      </div>
      <div className="lg:pt-20">
        <BookFlight />
      </div>
    </>
  );
}