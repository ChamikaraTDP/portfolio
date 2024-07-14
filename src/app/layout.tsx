import type { Metadata } from "next";
import "./globals.css";
import { sourceSans } from "./fonts";
import Image from "next/image";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Freelance Software Developer | Pramuditha Chamikara",
  description: "I'm a freelance software developer, creating meaningful solutions that help businesses to drive their business efforts forward.",
  openGraph: {
    title: 'Freelance Software Developer | Pramuditha Chamikara',
    description: "I'm a freelance software developer, creating meaningful solutions that help businesses to drive their business efforts forward.",
    url: 'https://chamikaratdp.com',
    siteName: 'Pramuditha Chamikara',
    images: [
      {
        url: 'https://chamikaratdp.com/images/chamikaratdp-og.png', // Must be an absolute URL
        width: 1184,
        height: 546,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="body-tdp"
        className={`${sourceSans.className} relative bg-background-default text-text-default`}
      >
        <Header />

        {children}

        <footer className="mt-24 py-10 px-6 md:p-10 bg-[#6C057D] text-text-white flex justify-center">
          <div className="w-full md:w-4/5 xl:w-1/2 flex justify-between">
            <section className="pr-4">
              <div className="text-lg font-semibold">Pramuditha Chamikara</div>
              <div className="">
                472, Thalagala Junction,
                <br />
                Kiriwattuduwa, Horana, Sri Lanka
              </div>
              <div className="pt-2">
                <a href="tel:+94719939729">Tel: +94 719939729</a>
              </div>
              <div className="pt-2">
                <a href="mailto:chamikaratdp@gmail.com">
                  Email: chamikaratdp@gmail.com
                </a>
              </div>
            </section>

            <section>
              <div className="font-semibold">You can find me on</div>

              <div className="flex mt-5">
                <a href="https://x.com/chamikaratdp" target="_blank">
                  <Image
                    className="mr-4"
                    src="/icons/twitter.png"
                    alt="Twitter icon"
                    width={25}
                    height={25}
                  />
                </a>
                {/* <Image
                  className="mr-4"
                  src="/icons/facebook.png"
                  alt="Facebook icon"
                  width={25}
                  height={25}
                /> */}
                {/* <a href="" target="_blank">
                  <Image
                    className="mr-4"
                    src="/icons/instagram.png"
                    alt="Instagram icon"
                    width={25}
                    height={25}
                  />
                </a> */}
              </div>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
