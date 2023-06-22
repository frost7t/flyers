import React from "react";
import CardExperience from "./cards/CardExperience";

export default function Experiences() {
  return (
    <div className="w-[90%] p-[3.7vw] ml-[0.7vw]">
      <div>
        <h4 className="mb-[6.8vw] text-3xl  lg:text-9xl font-bold">
          Hyer® <br /> Experience
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <p className="text-xl lg:w-1/2">
            At Hyer® we are bold. The aircraft is just a tool we use to get you
            where you want to be. Our clients enjoy much more value for their
            investment, accessing unparalleled personalisation when flying
            private. We offer personalised experiences with our on-demand
            charters and personalised flexibility with our exclusive shared
            flight. We upgrade the way you fly.
          </p>
        </div>
        <div>
           <CardExperience/> 
        </div>
      </div>
    </div>
  );
}
