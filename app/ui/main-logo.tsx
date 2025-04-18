import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function MainLogo({ center = false, sizeFactor = 1 }: { center?: boolean; sizeFactor?: number }) {
  const centerClass = center ? "justify-center" : "justify-start";
  const logoWidth = 60 * sizeFactor;
  const logoHeight = 48 * sizeFactor;
  const intSize = Math.round(2 * sizeFactor);
  const textHeight = `text-${intSize}xl`;
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center shrink-1 justify-center leading-none text-black md:${centerClass} md:shrink-0 group-hover:text-white`}
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.1px_#ffffff70]"
        src="/android-chrome-wo-bg-192x192.png"
        alt="Marl Logo"
        width={logoWidth}
        height={logoHeight}
        priority
      />
      <p className={textHeight}>Marl Bermudo</p>
    </div>
  );
}
