import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import useBoolean from "../hooks/useBoolean";

import SimpleLayout from "../components/simple-layout";
import SimpleHeader from "../components/simple-header";
import SimpleBody from "../components/simple-body";
import SimpleJoinWaitlistPopup from "../components/simple-join-waitlist-popup";
import SimpleRegistrationPopup from "../components/simple-registration-popup";

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
          passwordRequirement {
            minLength
            maxLength
            mustHaveUppercase
            mustHaveLowercase
            mustHaveDigits
            mustNotHaveSpaces
            blacklist
          }
        }
      }
    }
  `);

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

  switch (site.siteMetadata.theme) {
    case "simple":
      return (
        <>
          <SimpleLayout
            header={
              <SimpleHeader
                logo={logoFile.childImageSharp.fixed}
                title={site.siteMetadata.title}
                subTitle={site.siteMetadata.subTitle}
                appImage={appImageFile.childImageSharp.fluid}
                onRegistrationRequested={openPopup}
              ></SimpleHeader>
            }
            body={
              <SimpleBody
                appeals={site.siteMetadata.appeals}
                onRegistrationRequested={openPopup}
              ></SimpleBody>
            }
            showPopup={showRegistrationPopup || showJoinWaitlistPopup}
            onClosePopupRequested={closePopup}
            popup={
              showRegistrationPopup ? (
                <SimpleRegistrationPopup
                  passwordRequirement={site.siteMetadata.passwordRequirement}
                ></SimpleRegistrationPopup>
              ) : showJoinWaitlistPopup ? (
                <SimpleJoinWaitlistPopup></SimpleJoinWaitlistPopup>
              ) : null
            }
          ></SimpleLayout>
        </>
      );
    default:
      throw new Error(
        `unsupported theme '${site.siteMetadata.theme}' specified.`
      );
  }
}
