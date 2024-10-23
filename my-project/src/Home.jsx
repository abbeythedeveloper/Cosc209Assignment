// eslint-disable-next-line no-unused-vars
import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

function Home  () {
  return (
    <section
      id="home"
      className="w-full pt-3 mt-10 block md:pb-36 lg:pb-36 pb-10 md:block lg:flex lg:items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Home;
