import React from "react";
import Img from "gatsby-image"

export default function SimpleHeader({ logo, title, subTitle, appImage, onRegistrationRequested }) {
  return (
    <header className="w-full bg-primary-700 flex flex-col justify-center">
      <div className="mt-8 mb-4 flex justify-center">
        <Img fixed={logo}></Img>
      </div>
      <div className="my-4 flex justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">{title}</h1>
      </div>
      <div className="my-4 flex justify-center text-center px-4">
        <h2 className="text-white text-xl sm:text-3xl">{subTitle}</h2>
      </div>
      <div className="my-4 flex justify-center px-4">
        <div className="max-w-md w-full">
          <button
            className="w-full bg-gray-900 text-white font-bold px-6 py-3 rounded"
            onClick={onRegistrationRequested}
          >
            Register
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-md w-full -mb-20 sm:-mb-48">
          <Img fluid={appImage}></Img>
        </div>
      </div>
    </header>
  );
}
