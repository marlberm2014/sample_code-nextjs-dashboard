import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function MainLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center shrink-1 justify-center leading-none text-white md:justify-start md:shrink-0`}
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.1px_#ffffff70]"
        src="/android-chrome-192x192.png"
        alt="Marl Logo"
        width={60}
        height={48}
        priority
      />
      <p className="text-[32px]">Marl Bermudo</p>
    </div>
  );
}
