import InputCookie from "@/Components/buttons/InputCookie";
import Footer from "@/Components/footer/Footer";
import HeaderCookie from "@/Components/header/HeaderCookie";
import React from "react";

export default function Cookie() {
  return (
    <div>
      <HeaderCookie />
      <div className="max-w-[90%]  mx-auto">
        <div className="border-b-2 border-[#000] pt-40"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-2 pb-40 border-b-2 border-[#000]">
          <div className="pt-5">
            <h3 className="text-3xl lg:text-5xl font-semibold">Settings</h3>
          </div>
          <div className="pt-5">
            <p
              className="max-w-2xl pb-5 font-normal -tracking-tight"
              id="scroller"
            >
              When you visit a website, cookies are stored on your computer,
              laptop, tablet or phone. Cookies are text files that contain a
              small piece of information. The server sends this to a browser so
              that the server can identify the browser on each page. Hyer®
              Aviation also uses cookies to gain insight into your preferences.
            </p>
            <div>
              <InputCookie />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold pt-3">
              About cookies
            </h3>
          </div>
          <div className="lg:pt-20 pt-10">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              1.Introduction
            </h1>
            <p className="py-5 max-w-xl">
              Some functions on the Hyer® Aviation website are only accessible
              if cookies are accepted by you. Insofar as cookies contain
              identifiable data (that is, they can be traced back to a person),
              the Hyer® Aviation privacy policy also applies.
            </p>
            <h1 className="text-3xl lg:text-4xl font-semibold">
              2. Types of cookies
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold pt-6 pb-3">
              a.Functional cookies
            </h2>
            <p>
              The Hyer® Aviation website uses functional cookies. These cookies
              are necessary for the website to work. By placing these cookies
              Hyer® Aviation recognizes your computer (or another device such as
              smartphone or tablet). Without these cookies, certain parts and
              functionalities of the website cannot be used properly, for
              example, to create an account or to log in. These are placed to
              recognize certain preferences and settings, for example, your
              personal preferences with regard to whether or not to allow
              cookies, the country from which you visit the website, the
              language choice of the website, etc. These cookies can be used to
              visit the Hyer® Aviation website more easily.
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold pt-6 pb-3">
              b.Marketing cookies
            </h2>
            <p>
              Marketing cookies collect information about your internet usage in
              order to tailor advertisements to your preferences and to measure
              the effectiveness of an advertising campaign or to see whether an
              advertisement leads to a purchase or registration. These cookies
              are normally placed by a third party, which is a network of
              advertisers. These cookies are also used to identify an internet
              user. Based on the pages you visit, general knowledge can be
              obtained about how a website is used, so that information can be
              obtained about your interests.
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold pt-6 pb-3">
              c.Statistics cookies
            </h2>
            <p>
              The Hyer® Aviation website uses statistics cookies via Google
              Analytics. These cookies collect information about how the website
              is used by visitors. For example, the visitor statistics of the
              website are kept, it can be seen how you arrive at the website and
              how you use the website so that Hyer® Aviation gains a better
              insight into the functioning of the website.
            </p>
            <h3 className="text-lg lg:text-xl font-semibold pt-6 pb-3">
              d.Beacons and pixel tags
            </h3>
            <p>
              In addition to cookies, we may use web beacons, pixel tags, and
              other tracking technologies on the Platform to help customize the
              website and improve your experience. A “web beacon” or “pixel tag”
              is a tiny object or image embedded in a web page or email. They
              are used to track the number of users who have visited particular
              pages and viewed emails and acquire other statistical data. They
              collect only a limited set of data, such as a cookie number, time
              and date of the page or email view, and a description of the page
              or email on which they reside. Web beacons and pixel tags cannot
              be declined. However, you can limit their use by controlling the
              cookies that interact with them.
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold pt-6 pb-3">
              3. Refusing cookies
            </h2>
            <p className="py-3">
              If you wish, you can refuse cookies. You can do this via the
              "settings" option in your internet browser. If you use multiple
              browsers, you must refuse cookies on each browser.
            </p>
            <p className="py-3">
              Some cookies delete themselves automatically when you close your
              web browser, for example, session cookies. Other cookies persist
              until they have expired or are actively deleted. You can actively
              delete cookies via your web browser. How you can delete your
              cookies differs per web browser. For an explanation about this, we
              refer you to the explanation of the Dutch Consumers' Association,
              consult the following link:
            </p>
            <p className="py-3 cursor-pointer">
              https://www.consumentenbond.nl/internet-privacy/cookies-verwijderen
            </p>
            <p className="py-3">
              Please note that it is possible that certain functions or parts of
              the Hyer® Aviation website are no longer accessible or functional
              if you delete cookies.
            </p>
            <p className="py-3">
              Google Analytics runs on the Hyer® Aviation website. You can
              disable Google Analytics by downloading a tool from Google by
              referring to the following link:
            </p>
            <p className="py-3 cursor-pointer pb-20 lg:pb-40">
              https://tools.google.com/dlpage/gaoptout?hl=nl
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
