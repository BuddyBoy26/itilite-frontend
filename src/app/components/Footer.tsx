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
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Left: Logo + badges */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-40 h-12 relative">
              <Image src={ItiliteLogo} alt="Itilite logo" fill style={{ objectFit: "contain" }} />
            </div>

            {/* Security badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-14 h-14 relative">
                <Image src={ItiliteImage1} alt="ISO 27001" fill style={{ objectFit: "contain" }} />
              </div>
              <div className="w-14 h-14 relative">
                <Image src={ItiliteImage2} alt="SOC 2" fill style={{ objectFit: "contain" }} />
              </div>
              <div className="w-16 h-14 relative">
                <Image src={ItiliteImage3} alt="PCI DSS" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Product</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {productLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Company</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {companyLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {resourcesLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {contactLinks.map((l) => (
                  <li key={l} className="hover:text-gray-800">
                    <Link href="#">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Social + Downloads */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Follow us</h4>
              <div className="mt-3 flex space-x-3">
                <Link
                  href="https://www.linkedin.com/company/itilite"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-gray-900 hover:text-white"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.facebook.com/itilitetechnologies"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-gray-900 hover:text-white"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://twitter.com/itilite"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-gray-900 hover:text-white"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900">Download on</h5>
              <div className="mt-3 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                <Link href="https://apps.apple.com/us/app/itilite/id1484326787">
                  <Image src={AppStore} alt="App Store" width={150} height={50} />
                </Link>
                <Link href="https://play.google.com/store/search?q=itilite&c=apps&hl=en_IN">
                  <Image src={GooglePlay} alt="Google Play" width={150} height={50} />
                </Link>
              </div>
            </div>

            <div>
              <h6 className="text-gray-900 font-semibold">Contact us</h6>
              <Link href="mailto:contact@itilite.com" className="text-orange-600 text-sm hover:underline">
                contact@itilite.com
              </Link>
            </div>
          </div>
        </div>

        {/* Divider + Bottom links */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-sm text-center text-gray-500">
          <p>© ITILITE Technologies Private Limited</p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            {["Privacy Policy", "Trust & Security", "Cookie Declaration", "GDPR"].map((item) => (
              <Link
                key={item}
                href="#"
                className="inline-flex items-center space-x-1 hover:text-gray-800"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span>{item}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
