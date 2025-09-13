import React from "react";
import Image from "next/image";
import ItiliteLogo from "../../../public/itilite-logo.svg";
import ItiliteImage1 from "../../../public/itilite-footer-1.svg";
import ItiliteImage2 from "../../../public/itilite-footer-2.svg";
import ItiliteImage3 from "../../../public/itilite-footer-3.svg";
import AppStore from "../../../public/appstore-badge.png";
import GooglePlay from "../../../public/googleplay-badge.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

// Place assets in the `public/` folder and update the paths below:
// - /images/logo.png          (company logo)
// - /images/badge-iso.png     (security badges)
// - /images/appstore.png      (App Store badge)
// - /images/googleplay.png    (Google Play badge)

export default function Footer() {
  const productLinks = [
    "Business Travel",
    "Expense Management",
    "Integrations",
    "Credit Card Authorization",
  ];

  const companyLinks = ["About Us", "Careers", "Referral Program"];
  const resourcesLinks = [
    "Blog",
    "Free Guides & Templates",
    "Case Studies",
    "What's New",
  ];
  const contactLinks = ["Contact Us", "Help Center"];

  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-evenly gap-8">
          {/* Logo + badges */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="col-span-1 flex flex-col lg:col-span-2">
              <div className="flex items-center space-x-4">
                <div className="w-36 h-12 relative">
                  {/* logo.png should be ~ 200x70 */}
                  <Image
                    src={ItiliteLogo}
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-4">
                {/* badges horizontally, wrap on small screens */}
                <div className="flex space-x-4 flex-wrap">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={ItiliteImage1}
                      alt="ISO 27001"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="w-16 h-16 relative">
                    <Image
                      src={ItiliteImage2}
                      alt="SOC 2"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="w-20 h-16 relative">
                    <Image
                      src={ItiliteImage3}
                      alt="PCI DSS"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 col-span-1 md:col-span-3 lg:col-span-1">
            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
              <h3 className="text-xl font-medium text-gray-900">
                Product and Capabilities
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {productLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800 cursor-pointer">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
              <h3 className="text-xl font-medium text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {companyLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800 cursor-pointer">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
              <h3 className="text-xl font-medium text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {resourcesLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800 cursor-pointer">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
              <h3 className="text-xl font-medium text-gray-900">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {contactLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800 cursor-pointer">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: social, app downloads, contact */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-medium text-gray-900">
                Follow us on
              </h4>
              <div className="mt-4 flex space-x-3">
                {/* Simple circular icon buttons */}
                <Link
                  href="https://www.linkedin.com/company/itilite"
                  aria-label="LinkedIn"
                  className="cursor-pointer w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-gray-900 hover:text-gray-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.facebook.com/itilitetechnologies"
                  aria-label="Facebook"
                  className="cursor-pointer w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-gray-900 hover:text-gray-300"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://twitter.com/itilite"
                  aria-label="X"
                  className="cursor-pointer w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-gray-900 hover:text-gray-300"
                >
                  <FaXTwitter />
                </Link>
              </div>

              <div className="mt-6 w-full lg:w-48">
                <h5 className="text-gray-900 text-lg font-medium">
                  Download on
                </h5>
                <div className="mt-3 flex flex-col space-y-3">
                  <Link href="https://apps.apple.com/us/app/itilite/id1484326787" className="block w-full">
                    <Image
                      src={AppStore}
                      alt="App Store"
                      width={220}
                      height={60}
                    />
                  </Link>
                  <Link href="https://play.google.com/store/search?q=itilite&c=apps&hl=en_IN" className="block w-full">
                    <Image
                      src={GooglePlay}
                      alt="Google Play"
                      width={220}
                      height={60}
                    />
                  </Link>
                </div>

                <div className="mt-6 text-xl text-left">
                  <h6 className="text-gray-900 font-medium">Contact us</h6>
                  <Link
                    href="mailto:contact@itilite.com"
                    className="text-orange-600 hover:underline text-sm"
                  >
                    contact@itilite.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-center text-gray-500">
          © ITILITE Technologies Private Limited
        </div>

        <div className="mt-4 flex items-center justify-center space-x-8 text-sm text-gray-500">
          <Link
            href=""
            className="inline-flex items-center space-x-2 hover:text-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span>Privacy Policy</span>
          </Link>

          <Link
            href=""
            className="inline-flex items-center space-x-2 hover:text-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span>Trust & Security</span>
          </Link>

          <Link
            href=""
            className="inline-flex items-center space-x-2 hover:text-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span>Cookie Declaration</span>
          </Link>

          <Link
            href=""
            className="inline-flex items-center space-x-2 hover:text-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span>GDPR</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
