import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function MainLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <Image
        className="relative dark:drop-shadow-[0_0_0.1px_#ffffff70]"
        src="/android-chrome-192x192.png"
        alt="Marl Logo"
        width={60}
        height={48}
        priority
      />
      <p className="text-[44px]">Marl Bermudo</p>
    </div>
  );
}
