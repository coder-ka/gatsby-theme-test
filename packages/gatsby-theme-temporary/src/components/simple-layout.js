import React from "react";

export default function Layout({ header, children, submitButton, appeals }) {
  return (
    <div className="w-screen h-screen overflow-auto">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          {header}
          <main className="flex flex-col items-center mt-20 sm:mt-48">
            <div className="flex flex-col items-center max-w-screen-md w-full">
              {children}
              {appeals ? (
                <div className="flex flex-col w-64 sm:w-auto sm:flex-row items-center sm:justify-center mt-10">
                  {appeals}
                </div>
              ) : null}
              <div className="mt-10 w-full">
                {submitButton({
                  className:
                    "w-full bg-primary-700 text-white font-bold px-6 py-3 rounded",
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
