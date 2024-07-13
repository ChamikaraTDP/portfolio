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

const projects = [
  {
    name: "OnCoor",
    description:
      "OnCoor Inc, know for their robust and comprehensive data management platform, which offers data warehousing, validation, analytics and many other services. I helped them build thisexact system.",
    imageAlt: "screenshot showing form OnCoor web app",
    imagePath: "/images/oncoor.png",
    techStack:
      "Backend-Development, Frontent-Develpoment, Scripting and Hosting",
    siteLink: "https://oncoor.com",
    siteDisplay: "oncoor.com",
    imageFirst: true,
  },
  {
    name: "Hupe",
    description:
      "Web app developed for the company Hupe Lifestyle Coaching, as part of their health and wellness optimization program. This platform brings data from various different wearable devices into one single interface. I helped them create frontend elements in their Next.Js application.",
    imageAlt: "screenshot showing form Hupe website",
    imagePath: "/images/hupe.png",
    techStack: "Frontent-Develpoment, Image and Content Optimization",
    siteLink: "https://hupe.life",
    siteDisplay: "hupe.life",
    imageFirst: false,
  },
  {
    name: "Sujatha's Anthurium",
    description:
      "This website was build for a local florist who specialized in Anthurium. Website showcases their products and services and highlight their expertise in the field.",
    imageAlt: "screenshot showing form sujathas-anthurium website",
    imagePath: "/images/sujathas-anthurium.png",
    techStack: "Web Design, Frontend-Development, Hosting and Maintenance",
    siteLink: "https://sujathasanthurium.com",
    siteDisplay: "sujathasanthurium.com",
    imageFirst: true,
  },
];

function ProjectCard({ project }: any) {
  return (
    <div className="flex justify-center lg:items-center flex-wrap lg:flex-nowrap sm:px-5 mb-10 sm:mb-20 lg:mb-[100px]">
      <div
        className={`${project.imageFirst ? "lg:mr-20" : "lg:hidden"} shadow`}
      >
        <Image
          src={project.imagePath}
          alt={project.imageAlt}
          width={500}
          height={280}
        />
      </div>

      <div
        className={`mt-5 md:w-4/5 lg:w-[500px] text-left relative px-2 ${
          project.imageFirst ? "" : "lg:mr-20"
        }`}
      >
        <h4 className={`${mulish.className} text-center text-3xl font-semibold`}>
          {project.name}
        </h4>
        <p className="sm:text-center lg:text-left text-lg lg:text-xl mt-5">{project.description}</p>
        <div className="mt-4 sm:text-center lg:text-left">
          <a
            className="text-lg text-text-secondary underline"
            href={project.siteLink}
            target="_blank"
          >
            {project.siteDisplay}
          </a>
        </div>
        <h5 className="text-text-secondary mt-4 sm:text-center lg:text-left">
          Tasks Performed: {project.techStack}
        </h5>

        
        {/* <div className="hidden lg:block w-[350px] h-[200px] absolute border-border-default border-r border-b -bottom-8 -right-10 -z-10"></div> */}
      </div>

      {!project.imageFirst && (
          <div className="hidden lg:block shadow">
            <Image
              src="/images/hupe.png"
              alt="screenshot showing form sujathas-anthurium website"
              width={500}
              height={280}
            />
          </div>
        )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="">
      <section className="relative h-[545px]">
        <Image
          src="/images/Screenshot from 2024-05-07 00-02-11.v06.png"
          quality={100}
          alt="Screenshot of my code editor"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="absolute bottom-0 text-center text-text-white w-full">
          <h1
            className={`${lora.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-10`}
          >
            Web and Mobile
            <br />
            Development
          </h1>

          <div className="flex justify-center">
            <h3 className="text-lg md:text-2xl font-semibold my-5 w-4/5 lg:w-3/5 2xl:w-1/2">
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

      <section className="text-center mt-12 px-4 md:mt-20 py-2 md:py-5">
        <h2
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          grow your business with me
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5">
          Here are few ways I can help
        </h3>

        <div className="flex justify-center sm:px-5 mt-10 md:mt-20">
          <div className="flex justify-center flex-wrap gap-2 md:gap-5">
            {services.map((srv) => (
              <div
                key={srv.name}
                className="bg-white shadow hover:shadow-[#DF5EFF80] w-full md:w-[300px] md:h-[500px] rounded-br-2xl py-6 md:py-10 px-10 text-left"
              >
                <div className="flex items-center md:flex-col md:items-start">
                  <div className="relative object-contain w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                    <Image src={srv.iconPath} alt="creativity Icon" fill />
                  </div>

                  <h4 className="text-3xl font-semibold md:mt-10 ml-5 md:ml-0">
                    {srv.name}
                  </h4>
                </div>

                <p className="md:text-lg font-medium mt-4 md:mt-8 text-text-secondary">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center mt-12 px-4 md:mt-20 py-2 md:py-5">
        <h2
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          Look how I helped
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5">
          These are some of my recent projects
        </h3>

        <div className="mt-10 md:mt-20">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-20 py-20 bg-background-secondary">
        <h2
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          hear from my past clients
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5">
          Don&apos;t take my word for it
        </h3>

        <div className="mt-16 w-4/5 md:w-3/5 flex justify-between items-center">
          <div className="hidden text-text-secondary shrink-0 w-[60px] h-[60px] rounded-full bg-white lg:flex justify-center items-center hover:bg-button-focus hover:text-white hover:cursor-pointer">
            <ChevronLeftIcon />
          </div>

          <div className="items-center md:px-20">
            <p className="text-lg">
              Chamikara&apos;s hard work, professionalism, and commitment have
              been invaluable to our team, and we are grateful for the positive
              impact he have made.
            </p>

            <h4 className="text font-bold mt-8">
              Jamir Shaikh - Founder & CEO OnCoor Inc
            </h4>
          </div>

          <div className="hidden text-text-secondary shrink-0 w-[60px] h-[60px] rounded-full bg-white lg:flex justify-center items-center hover:bg-button-focus hover:text-white hover:cursor-pointer">
            <ChevronRightIcon />
          </div>
        </div>
      </section>

      <section className="mt-12 md:mt-20 pt-10 flex items-center flex-col px-3">
        <h2
          id="lets-start"
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          let&apos;s get started!
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5">
          I would love the chance to work for you
        </h3>

        <div className="mt-4 md:mt-10 w-full md:w-4/5 lg:w-3/5  xl:w-1/2">
          <CtaForm />
        </div>
      </section>
    </main>
  );
}
