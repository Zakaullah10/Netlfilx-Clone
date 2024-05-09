import React from "react";
import { Footer } from "./Footer";

import { Home1 } from "./Home1";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <Home1 />
      </div>
      <div className="mt-28">
      <Footer />
      </div>
    </div>
  );
}

export default Home;
