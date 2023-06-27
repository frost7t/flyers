import React from "react";
import CardExperience from "./cards/CardExperience";
import ButtonExp from "./buttons/ButtonExp";

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
          <p className=" pb-3 text-lg -tracking-wider lg:tracking-normal lg:w-1/2">
            At Hyer® we are bold. The aircraft is just a tool we use to get you
            where you want to be. Our clients enjoy much more value for their
            investment, accessing unparalleled personalisation when flying
            private. <br />
            <br /> We offer <strong>personalised experiences</strong>with our
            <strong> on-demand </strong>charters and
            <strong>personalised flexibility </strong>
            with our exclusive <strong>shared flight.</strong> We upgrade the
            way you fly.
          </p>
        </div>
        <div>
          <CardExperience />
        </div>
      </div>
      <div className="py-3">
        <ButtonExp />
      </div>
    </div>
  );
}
