import React from "react";

export default function TimelineItem({
  firstYears,
  firstDescription,
  secondYears,
  secondDescription,
  threeYears,
  threeDescription,
  fourYears,
  fourDescription,
}) {
  return (
    <div className="max-w-[90%] mx-auto border-b-2 border-black">
      <div>
        <h3 className="text-3xl lg:text-6xl font-semibold pt-5 pb-10 max-w-md">
          Our timeline
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-b lg:border-dashed border-black lg:max-w-[90%] lg:py-5">
        <div>
          <p className="font-semibold text-3xl">{firstYears}</p>
          <h3 className="lg:max-w-sm text-sm lg:text-lg lg:-tracking-wider font-normal py-3">
            {firstDescription}
          </h3>
        </div>
        <div>
          <p className="font-semibold text-3xl">{secondYears}</p>
          <h3 className="lg:max-w-[21rem] text-sm lg:text-lg lg:-tracking-wider font-normal py-3">
            {secondDescription}
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:ml-[20vw] lg:pt-5">
          <p className="font-semibold text-3xl">{threeYears}</p>
          <h3 className="lg:max-w-sm text-sm lg:text-lg lg:-tracking-wider font-normal py-3">
            {threeDescription}
          </h3>
        </div>
        <div className="pt-5 pb-5 lg:pb-28 lg:ml-[20vw]">
          <p className="font-semibold text-3xl">{fourYears}</p>
          <h3 className="lg:max-w-xs text-sm lg:text-lg lg:-tracking-wider font-normal py-3">
            {fourDescription}
          </h3>
        </div>
      </div>
    </div>
  );
}