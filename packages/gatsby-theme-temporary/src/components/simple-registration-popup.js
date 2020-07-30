import React, { useState, useRef, useEffect, useMemo } from "react";
import { isEmail } from "validator";
import Spinner from "react-spinkit";

import useBoolean from "../hooks/useBoolean";

import { registerUser } from "../api/user";
import { createSchema } from "../api/passwordValidator";

export default function SimpleRegistrationPopup({ passwordRequirement }) {
  const passwordSchema = useMemo(() => createSchema(passwordRequirement), [
    passwordRequirement,
  ]);

  const input = useRef(null);

  useEffect(() => {
    input.current && input.current.focus();
  }, []);

  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  useEffect(() => {
    setEmailAddressError("");
  }, [emailAddress]);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  useEffect(() => {
    setPasswordError("");
  }, [password]);

  const [loading, startLoading, stopLoading] = useBoolean();
  const [done, setDone] = useState(false);

  return (
    <div className="w-screen max-w-xl px-2">
      <div className="w-full rounded bg-white px-2 py-6 sm:p-10">
        <div className="w-full">
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
        <div className="w-full mt-4">
          <input
            ref={input}
            className="w-full border-2 border-gray-900 px-4 py-3 rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password."
          ></input>
          {passwordError === "empty" ? (
            <div className="mt-2">
              <span className="text-accent-600 font-bold">
                Enter your password.
              </span>
            </div>
          ) : passwordError === "invalid" ? (
            <div className="mt-2">
              <span className="text-accent-600 font-bold">
                Invalid password.
              </span>
              <div className="mt-2">
                <ol className="list-disc list-inside">
                  {passwordRequirement.minLength ? (
                    <li>
                      Passwords must be{" "}
                      <b>at least {passwordRequirement.minLength} characters</b>{" "}
                      long.
                    </li>
                  ) : null}
                  {passwordRequirement.maxLength ? (
                    <li>
                      Passwords must be{" "}
                      <b>
                        at maximum {passwordRequirement.maxLength} characters
                      </b>{" "}
                      long.
                    </li>
                  ) : null}
                </ol>
                {passwordRequirement.mustHaveUppercase ||
                passwordRequirement.mustHaveLowercase ||
                passwordRequirement.mustHaveDigits ? (
                  <div>
                    And the password must contain character categories among the
                    following:
                    <ol className="list-disc list-inside">
                      {passwordRequirement.mustHaveUppercase ? (
                        <li>Uppercase characters (A-Z)</li>
                      ) : null}
                      {passwordRequirement.mustHaveLowercase ? (
                        <li>Lowercase characters (a-z)</li>
                      ) : null}
                      {passwordRequirement.mustHaveDigits ? (
                        <li>Digits (0-9)</li>
                      ) : null}
                    </ol>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
        <div className="w-full mt-10">
          <button
            className="w-full bg-primary-700 text-white font-bold border-2 border-primary-700 px-6 py-3 rounded"
            onClick={async () => {
              let hasError = false;

              if (emailAddress === "") {
                setEmailAddressError("empty");
                hasError = true;
              }

              if (!isEmail(emailAddress)) {
                setEmailAddressError("invalid");
                hasError = true;
              }

              if (password === "") {
                setPasswordError("empty");
                hasError = true;
              }

              if (!passwordSchema.validate(password)) {
                setPasswordError("invalid");
                hasError = true;
              }

              if (!hasError) {
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
              "Register"
            )}
          </button>
        </div>
      </div>
      {done ? (
        <div className="mt-4 font-bold text-xl">
          We've sent an email to you! Check it out now!
        </div>
      ) : null}
    </div>
  );
}
