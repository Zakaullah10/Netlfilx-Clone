import React from "react";
import { NetflixLogo } from "./asset";
export function Start() {
  return (
    <div>
      {" "}
      <div>
        <header className="App-header w-[100%] lg:w-[100%]">
          <img className="xs:w-[80%] md:w-[50%]" src={NetflixLogo} />
        </header>
      </div>{" "}
    </div>
  );
}
