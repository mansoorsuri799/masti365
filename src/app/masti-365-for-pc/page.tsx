import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Masti 365 for PC — Play with Android Emulator",
  description:
    "Play Masti 365 on PC using BlueStacks or LDPlayer. Install the Android APK on Windows and enjoy a bigger screen.",
  alternates: { canonical: absoluteUrl(SITE.routes.pc) },
};

export default function PcPage() {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "PC Version" }]} />
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-accent">Masti 365</span> for PC
      </h1>
      <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
        There is no separate Windows installer for <Link href="/" className="text-accent hover:underline">Masti 365</Link>. The reliable method is an Android emulator: install BlueStacks, LDPlayer, or a similar tool, then sideload the same APK you use on phones.
      </p>

      <div className="flex justify-center mb-10">
        <Image
          src={SITE.logo}
          alt="Masti 365 for PC via Android emulator"
          width={220}
          height={220}
          className="object-contain"
          priority
        />
      </div>

      <section className="bg-secondary rounded-xl p-8 mb-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-accent">PC Setup Steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Install a trusted Android emulator on Windows.</li>
          <li>
            Download the Masti 365 APK from the{" "}
            <Link href={SITE.routes.download} className="text-accent hover:underline">
              download page
            </Link>
            .
          </li>
          <li>Drag the APK into the emulator or use its Install APK tool.</li>
          <li>Open Masti 365, register or log in, and enable keyboard mapping if you like.</li>
          <li>Use the same JazzCash/EasyPaisa wallet flow as on mobile.</li>
        </ol>
        <p>
          Emulators need decent RAM. Close heavy Chrome tabs if the lobby stutters. For phone-first screenshots of wallet flows, see the deposit and withdraw guides.
        </p>
      </section>

      <div className="text-center">
        <DownloadButton size="md" />
      </div>
    </article>
  );
}
