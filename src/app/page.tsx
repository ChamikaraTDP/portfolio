import Image from "next/image";
import { lora, mulish } from "./fonts";
import ChevronLeftIcon from "@assets/chevron-left.svg";
import ChevronRightIcon from "@assets/chevron-right.svg";
import CtaForm from "../components/CtaForm";

const services = [
  {
    name: "Design",
    iconPath: "/icons/creativity.png",
    description:
      "A good website is one that displays a careful balance between appearance and functionality. It can help you create a compelling and powerful first impression, turning visitors into paying customers.",
  },
  {
    name: "Development",
    iconPath: "/icons/software.png",
    description:
      "Fast and reliable development experience that makes the ends meet. Whether it is a simple website or complex web/mobile app I got you covered.",
  },
  {
    name: "SEO",
    iconPath: "/icons/seo.png",
    description:
      "Search Engine Optimization is important for your sites visibility in search results. Good SEO make sure your potential clients find you when they really need you.",
  },
  {
    name: "Marketing",
    iconPath: "/icons/search-engine.png",
    description:
      "Generate leads and boost sales with paid advertisements, social media marketing, email marketing and many other strategies.",
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="relative h-[545px]">
        <Image
          src="/images/Screenshot from 2024-05-07 00-02-11.v06.png"
          quality={100}
          alt="Screenshot of my code editor"
          fill
          // objectFit="cover"
          style={{ objectFit: "cover" }}
        />

        <div className="absolute bottom-0 text-center text-text-white w-full">
          <h1 className={`${lora.className} text-6xl font-bold mb-10`}>
            Web and Mobile
            <br />
            Development
          </h1>

          <div className="flex justify-center">
            <h3 className="text-2xl font-semibold my-5 w-1/2">
              Hi, I&apos;m a freelance software developer, creating meaningful
              solutions that help businesses to drive their business efforts
              forward.
            </h3>
          </div>

          <div className="mt-5 pb-10">
            <a
              href="#lets-start"
              className={`${mulish.className} text-xl py-3 px-6 border border-border-secondary hover:bg-button-focus hover:border-2`}
            >
              Let&apos;s Start
            </a>
          </div>
        </div>
      </section>

      <section className="text-center mt-20 py-5">
        <h2
          className={`${lora.className} text-4xl font-medium capitalize text-title-primary`}
        >
          grow your business with me
        </h2>

        <h3 className="text-2xl font-semibold text-title-primary mt-5">
          Here are few ways I can help
        </h3>

        <div className="flex justify-center mt-20">
          <div className="flex justify-center gap-5">
            {services.map((srv) => (
              <div
                key={srv.name}
                className="bg-white shadow hover:shadow-[#DF5EFF80] w-[300px] h-[500px] rounded-br-2xl py-10 px-10 text-left"
              >
                <Image
                  src={srv.iconPath}
                  alt="creativity Icon"
                  width={80}
                  height={80}
                />

                <h4 className="text-3xl font-semibold mt-10">{srv.name}</h4>

                <p className="text-lg font-medium mt-8 text-text-secondary">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center mt-20 py-5">
        <h2
          className={`${lora.className} text-4xl font-medium capitalize text-title-primary`}
        >
          Look how I helped
        </h2>

        <h3 className="text-2xl font-semibold text-title-primary mt-5">
          These are some of my recent projects
        </h3>

        <div className="mt-20">
          <div className="flex justify-center mb-[100px]">
            <div className="mr-20 shadow">
              <Image
                src="/images/oncoor.png"
                alt="screenshot showing form sujathas-anthurium website"
                width={500}
                height={280}
              />
            </div>

            <div className="w-[500px] text-left relative">
              <h4 className={`${mulish.className} text-3xl font-semibold`}>
                OnCoor
              </h4>

              <p className="text-xl mt-5">
                OnCoor Inc, know for their robust and comprehensive data
                management platform, which offers data warehousing, validation,
                analytics and many other services. I helped them build this
                exact system.
              </p>

              <div className="mt-4">
                <a
                  className="text-lg text-text-secondary underline"
                  href="https://oncoor.com"
                  target="_blank"
                >
                  oncoor.com
                </a>
              </div>

              <h5 className="text-text-secondary mt-4">
                Tasks Performed: Backend-Development, Frontent-Develpoment,
                Scripting and Hosting
              </h5>

              <div className="w-[350px] h-[200px] absolute border-border-default border-r border-b -bottom-8 -right-10 -z-10"></div>
            </div>
          </div>

          <div className="flex justify-center py-[40px] mb-[100px]">
            <div className="w-[500px] text-left mr-20 relative">
              <h4 className={`${mulish.className} text-3xl font-semibold`}>
                Hupe
              </h4>

              <p className="text-xl mt-5">
                Web app developed for the company, Hupe Lifestyle Coaching, as
                part of their health and wellness optimization program. This
                platform brings data from various different wearable devices
                into one single interface. I helped them create frontend
                elements in their Next.Js application.
              </p>

              <div className="mt-4">
                <a
                  className="text-lg text-text-secondary underline"
                  href="https://hupe.life"
                  target="_blank"
                >
                  hupe.life
                </a>
              </div>

              <h5 className="text-text-secondary mt-4">
                Tasks Performed: Backend-Development, Frontent-Develpoment,
                Scripting and Hosting
              </h5>

              <div className="w-[350px] h-[200px] absolute border-border-default border-l border-b -bottom-8 -left-10 -z-10"></div>
            </div>

            <div className="shadow">
              <Image
                src="/images/hupe.png"
                alt="screenshot showing form sujathas-anthurium website"
                width={500}
                height={280}
              />
            </div>
          </div>

          <div className="flex justify-center mb-20">
            <div className="mr-20 shadow">
              <Image
                src="/images/sujathas-anthurium.png"
                alt="screenshot showing form sujathas-anthurium website"
                width={500}
                height={280}
              />
            </div>

            <div className="w-[500px] text-left relative">
              <h4 className={`${mulish.className} text-3xl font-semibold`}>
                Sujatha&apos;s Anthurium
              </h4>

              <p className="text-xl mt-5">
                This website was build for a local florist who specialized in
                Anthurium. Website showcases their products and services and
                highlight their expertise in the field.
              </p>

              <div className="mt-4">
                <a
                  className="text-lg text-text-secondary underline"
                  href="https://sujathasanthurium.com"
                  target="_blank"
                >
                  sujathasanthurium.com
                </a>
              </div>

              <h5 className="text-text-secondary mt-4">
                Tasks Performed : Web Design, Frontend-Development, Hosting and
                Maintenance
              </h5>

              <div className="w-[350px] h-[200px] absolute border-border-default border-r border-b -bottom-8 -right-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-20 py-20 bg-background-secondary">
        <h2
          className={`${lora.className} text-4xl font-medium capitalize text-title-primary`}
        >
          hear from my past clients
        </h2>

        <h3 className="text-2xl font-semibold text-title-primary mt-5">
          Don&apos;t take my word for it
        </h3>

        <div className="mt-16 w-3/5 flex justify-between items-center">
          <div className="text-text-secondary shrink-0 w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center hover:bg-button-focus hover:text-white hover:cursor-pointer">
            <ChevronLeftIcon />
          </div>

          <div className="items-center px-20">
            <p className="text-lg">
              Chamikara&apos;s hard work, professionalism, and commitment have
              been invaluable to our team, and we are grateful for the positive
              impact he have made.
            </p>

            <h4 className="text font-bold mt-8">
              Jamir Shaikh - Founder & CEO OnCoor Inc
            </h4>
          </div>

          <div className="text-text-secondary shrink-0 w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center hover:bg-button-focus hover:text-white hover:cursor-pointer">
            <ChevronRightIcon />
          </div>
        </div>
      </section>

      <section className="mt-20 pt-10 flex items-center flex-col">
        <h2 id="lets-start"
          className={`${lora.className} text-4xl font-medium capitalize text-title-primary`}
        >
          let&apos;s get started!
        </h2>

        <h3 className="text-2xl font-semibold text-title-primary mt-5">
          I would love the chance to work for you
        </h3>

        <div className="mt-10 w-1/2">
          <CtaForm />
        </div>
      </section>
    </main>
  );
}
