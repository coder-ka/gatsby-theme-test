import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { isEmail } from "validator";

import Img from "gatsby-image";
import Spinner from "react-spinkit";

import Dimmer from "../components/dimmer";
import Icon from "../components/icon";

import SimpleLayout from "../components/simple-layout";
import SimpleHeader from "../components/simple-header";
import SimpleAppeal from "../components/simple-appeal";
import SimpleJoinWaitlistPopup from "../components/simple-join-waitlist-popup";

import { addToWaitlist } from "../api/wailtlist";

import useBoolean from "../hooks/useBoolean";

export default function Home() {
  const { logoFile, appImageFile, site } = useStaticQuery(graphql`
    query {
      logoFile: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      appImageFile: file(relativePath: { eq: "app-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          theme
          title
          subTitle
          appeals {
            icon
            title
            description
          }
          released
          submitButton {
            caption
          }
          emailAddressInput {
            placeholder
            errorMessageWhenEmpty
            errorMessageWhenInvalid
          }
          joinWaitlistButton {
            caption
          }
          joinWaitlistCompleteMessage
        }
      }
    }
  `);

  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressIsEmpty, setEmailAddressIsEmpty] = useState(false);
  const [emailAddressIsInvalid, setEmailAddressIsInvalid] = useState(false);

  const [
    showRegistrationPopup,
    openRegistrationPopup,
    closeRegistrationPopup,
  ] = useBoolean();
  const [
    showJoinWaitlistPopup,
    openJoinWaitlistPopup,
    closeJoinWaitlistPopup,
  ] = useBoolean();

  const openPopup = site.siteMetadata.released
    ? openRegistrationPopup
    : openJoinWaitlistPopup;
  const closePopup = site.siteMetadata.released
    ? closeRegistrationPopup
    : closeJoinWaitlistPopup;

  const [loading, startLoading, stopLoading] = useBoolean();
  const [done, setDone] = useState(false);

  switch (site.siteMetadata.theme) {
    case "simple":
      const logo = <Img fixed={logoFile.childImageSharp.fixed}></Img>;
      const title = (props) => <h1 {...props}>{site.siteMetadata.title}</h1>;
      const subTitle = (props) => (
        <h2 {...props}>{site.siteMetadata.subTitle}</h2>
      );
      const submitButton = (props) => (
        <button {...props} onClick={openPopup}>
          {site.siteMetadata.submitButton.caption}
        </button>
      );
      const appImage = <Img fluid={appImageFile.childImageSharp.fluid}></Img>;
      const appeals =
        site.siteMetadata.appeals &&
        site.siteMetadata.appeals.map(({ icon, title, description }, index) => (
          <SimpleAppeal
            key={index}
            icon={<Icon name={icon} />}
            title={<h3>{title}</h3>}
            description={<p>{description}</p>}
          ></SimpleAppeal>
        ));
      const emailInput = (props) => (
        <input
          {...props}
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder={site.siteMetadata.emailAddressInput.placeholder}
        ></input>
      );

      const emailInputErrorMessage = emailAddressIsEmpty
        ? site.siteMetadata.emailAddressInput.errorMessageWhenEmpty
        : emailAddressIsInvalid
        ? site.siteMetadata.emailAddressInput.errorMessageWhenInvalid
        : null;

      return (
        <>
          <SimpleLayout
            header={
              <SimpleHeader
                logo={logo}
                title={title}
                subTitle={subTitle}
                submitButton={submitButton}
                appImage={appImage}
              ></SimpleHeader>
            }
            submitButton={submitButton}
            appeals={appeals}
          ></SimpleLayout>
          {showRegistrationPopup || showJoinWaitlistPopup ? (
            <Dimmer
              className="bg-gray-900"
              onIntentToClose={closePopup}
              closeButton={(props) => (
                <span {...props}>
                  <Icon name="times"></Icon>
                </span>
              )}
            >
              {showRegistrationPopup
                ? // registration popup
                  null
                : null}
              {showJoinWaitlistPopup ? (
                // join waitlist popup
                <SimpleJoinWaitlistPopup
                  emailInput={emailInput}
                  emailInputErrorMessage={emailInputErrorMessage}
                  joinWaitlistButton={(props) => (
                    <button
                      {...props}
                      onClick={async () => {
                        if (emailAddress === "") {
                          setEmailAddressIsEmpty(true);
                          setEmailAddressIsInvalid(false);
                          return;
                        }

                        if (!isEmail(emailAddress)) {
                          setEmailAddressIsEmpty(false);
                          setEmailAddressIsInvalid(true);
                          return;
                        }

                        if (isEmail(emailAddress)) {
                          setEmailAddressIsEmpty(false);
                          setEmailAddressIsInvalid(false);

                          startLoading();

                          await addToWaitlist({ emailAddress });

                          stopLoading();

                          setDone(true);
                        }
                      }}
                    >
                      {loading ? (
                        <Spinner name="three-bounce" color="white"></Spinner>
                      ) : (
                        site.siteMetadata.joinWaitlistButton.caption
                      )}
                    </button>
                  )}
                  completeMessage={
                    done ? site.siteMetadata.joinWaitlistCompleteMessage : null
                  }
                ></SimpleJoinWaitlistPopup>
              ) : null}
            </Dimmer>
          ) : null}
        </>
      );
    default:
      throw new Error(
        `unsupported theme '${site.siteMetadata.theme}' specified.`
      );
  }
}
