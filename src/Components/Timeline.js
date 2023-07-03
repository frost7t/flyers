import React from "react";
import TimelineItem from "./TimeLineItem";

export default function Timeline() {
  return (
    <div>
      <TimelineItem
        firstYears="2019"
        firstDescription="The company expanded its services to Germany, Austria and
            Switzerland. Clients outside the initial closed group were welcomed
            to book with ENVOY. The company introduced the innovative Smart
            Quotes, simplifying the process of choosing an aircraft. Shortly
            after, the client base expanded to the United Kingdom and Spain."
        secondYears="2021"
        secondDescription="ENVOY rebranded to Hyer® Aviation. A new brand, website and a
            tech-driven strategy were launched, followed by a bold service
            portfolio. An innovative proprietary platform and an ambitious
            membership program were released to support better the rapid demand
            for Hyer® services and exclusive flights."
        threeYears="2020"
        threeDescription=" First-of-its-kind Shared Flights were introduced. Repatriation
            flights were organised in Asia, Africa and Europe with both small
            and large aircraft. Special solutions for groups and a carbon offset
            program for private aviation in Benelux were launched."
        fourYears="2022"
        fourDescription=" Hyer developed a client portfolio and launched an exclusive mobile
            application for its loyal clients. A significant increase in demand,
            primarily during summer, has led to additional sales teams and
            flight support."
      />
    </div>
  );
}