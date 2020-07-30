import React from "react";
import Icon from "./icon"

import SimpleAppeal from "./simple-appeal";

export default function SimpleBody({ appeals, onRegistrationRequested }) {
  return (
    <>
      {appeals ? (
        <div className="flex flex-col w-64 sm:w-auto sm:flex-row items-center sm:justify-center mt-10">
          {appeals.map(({ icon, title, description }, index) => (
            <SimpleAppeal
              key={index}
              icon={<Icon name={icon} />}
              title={<h3>{title}</h3>}
              description={<p>{description}</p>}
            ></SimpleAppeal>
          ))}
        </div>
      ) : null}
      <div className="mt-10 w-full">
        <button
          className="w-full bg-primary-700 text-white font-bold px-6 py-3 rounded"
          onClick={onRegistrationRequested}
        >
          Register
        </button>
      </div>
    </>
  );
}
