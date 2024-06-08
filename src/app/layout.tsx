import type { Metadata } from "next";
import "./globals.css";
import { mulish, sourceSans } from "./fonts";
import Image from "next/image";

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
        className={`${sourceSans.className} relative bg-background-default text-text-default`}
      >
        <header
          className={`${mulish.className} absolute z-40 top-0 left-0 w-full text-text-white flex justify-center`}
        >
          <nav className="flex justify-between items-center mt-5 w-3/5">
            <div className="w-[250px]">
              <a
                className="hover:underline text-xl uppercase mr-10"
                href="/home"
              >
                home
              </a>
              <a
                className="hover:underline text-xl uppercase pl-6"
                href="/blog"
              >
                blog
              </a>
            </div>

            <h2
              className={`${sourceSans.className} text-4xl text-center font-bold uppercase`}
            >
              pramuditha chamikara
            </h2>

            <div className="w-[250px] text-end">
              <a className="hover:underline text-xl uppercase" href="/about">
                about
              </a>
              <a
                className="text-xl uppercase ml-10 py-2 px-6 border border-border-secondary hover:bg-button-focus hover:border-2 hover:ml-[38px]"
                href="#lets-start"
              >
                hire&nbsp;me
              </a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="mt-24 p-10 bg-[#6C057D] text-text-white flex justify-center">
          <div className="w-1/2 flex justify-between">
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
              <div className="text-lg font-semibold">You can find me on</div>

              <div className="flex mt-5">
                <Image
                  className="mr-4"
                  src="/icons/twitter.png"
                  alt="Twitter icon"
                  width={40}
                  height={40}
                />
                <Image
                  className="mr-4"
                  src="/icons/facebook.png"
                  alt="Facebook icon"
                  width={40}
                  height={40}
                />
                <Image
                  className="mr-4"
                  src="/icons/instagram.png"
                  alt="Instagram icon"
                  width={40}
                  height={40}
                />
              </div>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
