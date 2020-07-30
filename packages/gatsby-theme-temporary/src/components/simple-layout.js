import React from "react";
import Dimmer from "./dimmer";

export default function Layout({ header, body, showPopup, onClosePopupRequested, popup }) {
  return (
    <>
      <div className="w-screen h-screen overflow-auto">
        <div className="flex justify-center">
          <div className="max-w-screen-xl w-full">
            {header}
            <main className="flex flex-col items-center mt-20 sm:mt-48">
              <div className="flex flex-col items-center max-w-screen-md w-full">
                {body}
              </div>
            </main>
          </div>
        </div>
      </div>

      {showPopup ? (
        <Dimmer
          className="bg-gray-900"
          showCloseIcon
          onCloseRequested={onClosePopupRequested}
        >
          {popup}
        </Dimmer>
      ) : null}
    </>
  );
}
