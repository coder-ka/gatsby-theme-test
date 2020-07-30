import React from "react";

export default function SimpleHeader({
  logo,
  title,
  subTitle,
  submitButton,
  appImage,
}) {
  return (
    <header className="w-full bg-primary-700 flex flex-col justify-center">
      <div className="mt-8 mb-4 flex justify-center">{logo}</div>
      <div className="my-4 flex justify-center text-center px-4">
        {title({
          className: "text-white text-4xl md:text-6xl font-bold",
        })}
      </div>
      <div className="my-4 flex justify-center text-center px-4">
        {subTitle({
          className: "text-white text-xl sm:text-3xl",
        })}
      </div>
      <div className="my-4 flex justify-center px-4">
        <div className="max-w-md w-full">
          {submitButton({
            className:
              "w-full bg-gray-900 text-white font-bold px-6 py-3 rounded",
          })}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-md w-full -mb-20 sm:-mb-48">
          {appImage}
        </div>
      </div>
    </header>
  );
}
