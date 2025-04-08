"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { SocialIcon } from "react-social-icons";

import { StickyNavbar } from "@/app/ui/navigation/sticky-navbar";
import { MobileHomeCard } from "@/app/ui/mobile-home-card";

const images = [
  {
    original: "/marl-old-logo.png",
    thumbnail: "/marl-old-logo.png",
    originalAlt: "Marl Bermudo's logo",
    originalWidth: 1000,
    originalHeight: 760,
  },
  {
    original: "/hero-desktop.png",
    thumbnail: "/hero-desktop.png",
    originalAlt: "Sample screenshots of the dashboard project showing desktop version",
    originalWidth: 1000,
    originalHeight: 760,
  },
  {
    original: "/opengraph-image.png",
    thumbnail: "/opengraph-image.png",
    originalAlt: "Yet another sample screenshots of the dashboard project showing desktop version",
    originalWidth: 1000,
    originalHeight: 760,
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex items-center h-30 shrink-0 rounded-lg bg-sky-300 p-4">
        <StickyNavbar />
      </div>
      <div className="mt-4 hidden grow flex-col gap-4 md:flex md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-green-950 md:text-3xl md:leading-normal`}>
            A personal portfolio website designed and developed by <strong>Marl Bermudo</strong>.
            <br />
            Explore my professional profiles on{" "}
            <span className="socials inline-flex flex-row justify-center items-center">
              <a href="https://www.linkedin.com/in/marl-bermudo/" className="text-blue-500 hover:text-blue-800">
                Linked
              </a>
              <SocialIcon
                href="https://www.linkedin.com/in/marl-bermudo/"
                url="www.linkedin.com"
                className="icon square-icon"
              />
            </span>
            <span className="px-1">and</span>
            <span className="socials inline-flex flex-row justify-center items-center">
              <a href="https://github.com/marlberm2014" className="text-blue-500 hover:text-blue-800">
                Github
              </a>
              <SocialIcon href="https://github.com/marlberm2014" url="www.github.com" className="icon" />
            </span>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 ">
          <ImageGallery items={images} showBullets autoPlay additionalClass="home-gallery desktop" />
        </div>
      </div>
      <div className="block md:hidden">
        <MobileHomeCard />
      </div>
    </main>
  );
}
