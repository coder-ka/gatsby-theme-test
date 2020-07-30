import React, { useState, useRef, useEffect } from "react";
import { isEmail } from "validator";
import Spinner from "react-spinkit";

import useBoolean from "../hooks/useBoolean";

import { registerUser } from "../api/user";

export default function JoinWaitlistPopup() {
  const input = useRef(null);

  useEffect(() => {
    input.current && input.current.focus();
  }, []);

  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");

  const [loading, startLoading, stopLoading] = useBoolean();
  const [done, setDone] = useState(false);

  return (
    <div className="w-screen max-w-xl sm:mx-0 px-2">
      <div className="w-full rounded bg-white px-2 py-6 sm:p-10 sm:flex sm:flex-row">
        <div className="w-full sm:mr-4">
          <input
            ref={input}
            className="w-full border-2 border-gray-900 px-4 py-3 rounded"
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Enter your email address."
          ></input>
          {emailAddressError === "empty" ? (
            <div className="mt-2 text-accent-600 font-bold">
              Enter your email address.
            </div>
          ) : emailAddressError === "invalid" ? (
            <div className="mt-2 text-accent-600 font-bold">
              Invalid email address format.
            </div>
          ) : null}
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <button
            className="w-full bg-primary-700 text-white font-bold border-2 border-primary-700 px-6 py-3 rounded"
            onClick={async () => {
              if (emailAddress === "") {
                setEmailAddressError("empty");
              } else if (!isEmail(emailAddress)) {
                setEmailAddressError("invalid");
              } else if (isEmail(emailAddress)) {
                setEmailAddressError("");

                startLoading();

                await registerUser({ emailAddress });

                stopLoading();

                setDone(true);
              }
            }}
          >
            {loading ? (
              <Spinner name="three-bounce" color="white"></Spinner>
            ) : done ? (
              "Resend"
            ) : (
              "Join the waitlist."
            )}
          </button>
        </div>
        {done ? (
          <div className="mt-4 font-bold text-xl">
            We've sent an email to you! Check it out now!
          </div>
        ) : null}
      </div>
    </div>
  );
}
