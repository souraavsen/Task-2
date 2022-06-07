import React from "react";
import Banner from "./Banner";
import Events from "./Events";
import Headlines from "./Headlines";
import Members from "./Members";
import TopNewes from "./TopNewes";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headlines />
      <Members />
      <TopNewes />
      <Events />
    </div>
  );
};

export default Home;
