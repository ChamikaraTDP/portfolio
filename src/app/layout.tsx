import type { Metadata } from "next";
import "./globals.css";
import { mulish, sourceSans } from "./fonts";
import Image from "next/image";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Freelance Software Developer | Pramuditha Chamikara",
  description: "Web and Mobile Development",
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
          <div className="w-full md:w-1/2 flex justify-between">
            <section className="">
              <div className="text-lg font-semibold">Pramuditha Chamikara</div>
              <div className="">
                No. 41, Remunagoda,
                <br />
                Kalutara, Sri Lanka 12009
              </div>
              <div className="pt-2">Tel: +94 719939729</div>
              <div className="pt-2">Email: chamikaratdp@gmail.com</div>
            </section>

            <section>
              <div className="font-semibold">You can find me on</div>

              <div className="flex mt-5">
                <Image
                  className="mr-4"
                  src="/icons/twitter.png"
                  alt="Twitter icon"
                  width={25}
                  height={25}
                />
                {/* <Image
                  className="mr-4"
                  src="/icons/facebook.png"
                  alt="Facebook icon"
                  width={25}
                  height={25}
                /> */}
                <Image
                  className="mr-4"
                  src="/icons/instagram.png"
                  alt="Instagram icon"
                  width={25}
                  height={25}
                />
              </div>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
