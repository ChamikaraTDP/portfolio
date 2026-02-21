import Image from 'next/image';
import { lora, mulish } from './fonts';
import CtaForm from '../components/CtaForm';
import ProjectCard from '../components/ProjectCard';

const mainStack = [
  {
    name: 'React',
    iconPath: '/icons/react.svg',
  },
  {
    name: 'NestJs',
    iconPath: '/icons/nestjs.svg',
  },
  {
    name: 'NextJs',
    iconPath: '/icons/nextjs.svg',
  },
  {
    name: 'React Native',
    iconPath: '/icons/react.svg',
  },
  {
    name: 'PostgreSQL',
    iconPath: '/icons/postgresql.svg',
  },
  {
    name: 'Azure',
    iconPath: '/icons/microsoft-azure.png',
  },
];

const projects = [
  {
    name: 'DFAR Inventory',
    description:
      'Custom inventory system that can manage resources in multiple locations. Project originally designed for the Department of Fisheries and Aquatic resources, Sri Lanka.',
    imageAlt: 'screenshot showing DFAR Inventory web app',
    imagePath: '/images/dfar-inventory.png',
    tasks: 'Backend-Development, Frontent-Develpoment, Scripting and Hosting',
    siteLink: '',
    siteDisplay: '',
    imageFirst: true,
    techStack: [
      'Laravel',
      'Vue.js',
      'PHP',
      'Javascript',
      'HTML',
      'CSS',
      'Bulma',
      'jsPDF',
      'MySQL',
    ],
    longDesc: (
      <div>
        The Department of Fisheries and Aquatic Resources (DFAR) of Sri Lanka is
        oversees the management and regulation of marine fisheries in the
        country. <br />
        <br /> This inventory developed for their internal use; to replace old
        ledgers. <br />
        <br />
        Key Features,
        <ul className="list-disc pl-5">
          <li>Separate account for each location(station)</li>
          <li>Multiple user accounts for each station</li>
          <li>Real-Time inventory tracking</li>
          <li>
            Manage life-cycle of long-lived items (eg:- Tables, special process
            for adding/removing items)
          </li>
          <li>Manage items that can be issued in bulk (eg:- A4 Sheets)</li>
          <li>Generate PDF documents for every transaction</li>
          <li>Search, Filter, Ordering features</li>
          <li>Ability to view all past transactions</li>
          <li>
            Ability to generate reports for a desired time frame and save them
            as PDF documents
          </li>
          <li>Feature rich Admin panel</li>
        </ul>
      </div>
    ),
    descImages: [
      {
        alt: 'screenshot 1 showing DFAR Inventory web app',
        path: '/images/projects/dfar/dfar-inventory-1.png',
      },
      {
        alt: 'screenshot 2 showing DFAR Inventory web app',
        path: '/images/projects/dfar/dfar-inventory-2.png',
      },
      {
        alt: 'screenshot 3 showing DFAR Inventory web app',
        path: '/images/projects/dfar/dfar-inventory-3.png',
      },
    ],
  },
  {
    name: 'Hupe',
    description:
      'Web app developed for the company Hupe Lifestyle Coaching, as part of their health and wellness optimization program. This platform brings data from various different wearable devices into one single interface. I helped them create frontend elements in their Next.Js application.',
    imageAlt: 'screenshot showing form Hupe website',
    imagePath: '/images/hupe.png',
    tasks: 'Frontent-Develpoment, Image and Content Optimization',
    siteLink: 'https://hupe.life',
    siteDisplay: 'hupe.life',
    imageFirst: false,
    techStack: [
      'Typescript',
      'React.js',
      'Next.js',
      'Tailwindcss',
      'Chart.js',
      'Zustand',
      'Axios',
      'Eslint',
    ],
    longDesc: (
      <p>
        Web app developed for the company Hupe Lifestyle Coaching, as part of
        their health and wellness optimization program. This platform brings
        data from various different wearable devices into one single interface.
        I helped them create frontend elements in their Next.Js application.
        <br />
        <br /> Here I worked with the frontend team. Client put much focus on
        visuals and look and feel of the application and stresses on pixel
        perfect design and seamless responsiveness. So we put much effort and
        care for every little detail in every design element. Had to integrate
        various different wearable devices into the system to gather data and
        visualize them in an appealing manner. We used charts and different grid
        elements for that. <br />
        <br /> Showing stunning visuals and animations without losing
        application performance is a difficult task. But techniques we used like
        server-side rendering and static-site rendering made it possible.
      </p>
    ),
    descImages: [
      {
        alt: 'screenshot 1 showing HUPE web app',
        path: '/images/projects/hupe/hupe-1.png',
      },
      {
        alt: 'screenshot 2 showing HUPE web app',
        path: '/images/projects/hupe/hupe-2.png',
      },
      {
        alt: 'screenshot 3 showing HUPE web app',
        path: '/images/projects/hupe/hupe-3.png',
      },
    ],
  },
  {
    name: "Sujatha's Anthurium",
    description:
      'This website was build for a local florist who specialized in Anthurium. Website showcases their products and services and highlight their expertise in the field.',
    imageAlt: 'screenshot showing form sujathas-anthurium website',
    imagePath: '/images/sujathas-anthurium.png',
    tasks: 'Web Design, Frontend-Development, Hosting and Maintenance',
    siteLink: 'https://sujathasanthurium.com',
    siteDisplay: 'sujathasanthurium.com',
    imageFirst: true,
    techStack: [
      'Typescript',
      'React.js',
      'Next.js',
      'Tailwindcss',
      'Axios',
      'Formik',
      'Eslint',
    ],
    longDesc: (
      <p>
        This website was build for a local florist who specialized in Anthurium.
        Website showcases their products and services and highlight their
        expertise in the field. <br />
        <br /> Client required a simple yet elegant design to showcase their
        anthurium collection. They also requested a space for their blog posts.
        In this project I did all the work from designing to marketing. I used a
        mobile first approach for the design and made sure to utilize every
        screen size as much as possible. Making the plants and flowers appealing
        to customers was the main goal. <br />
        <br /> Improving load times using image optimizations and static-site
        rendering, enhancing site discoverability using search engine
        optimization techniques, nginx server setup are some other tasks that I
        took care of.
      </p>
    ),
    descImages: [
      {
        alt: 'screenshot 1 showing form sujathas-anthurium website',
        path: '/images/projects/sujathas-anthurium/sujathas-anthurium-1.png',
      },
      {
        alt: 'screenshot 2 showing form sujathas-anthurium website',
        path: '/images/projects/sujathas-anthurium/sujathas-anthurium-2.png',
      },
      {
        alt: 'screenshot 3 showing form sujathas-anthurium website',
        path: '/images/projects/sujathas-anthurium/sujathas-anthurium-3.png',
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative h-[545px]">
        <Image
          src="/images/code-editor-purple-blurred.png"
          quality={100}
          alt="Screenshot of my code editor"
          fill
          style={{ objectFit: 'cover' }}
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
              Software Engineer | Building scalable solutions that accelerate
              business growth
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
          My Work
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

      <section className="flex flex-col items-center text-center mt-20 py-20 bg-[#F8FBCD]">
        <h2
          className={`${lora.className} px-2 text-2xl sm:text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          Technology stack I&apos;m Familiar with
        </h2>

        <div className="mt-16 w-11/12 sm:w-4/5 2xl:w-3/5 flex justify-between flex-wrap md:flex-nowrap">
          {mainStack.map((stackItem) => (
            <div
              key={stackItem.name}
              className="p-4 flex flex-col items-center"
            >
              <div className="relative h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] xl:h-[120px] xl:w-[120px]">
                <Image
                  src={stackItem.iconPath}
                  fill={true}
                  alt={`${stackItem.name} icon`}
                />
              </div>

              <h4 className="mt-5 sm:text-lg xl:text-2xl">{stackItem.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5 px-2">
          Other than the main stack listed above, I&apos;m well versed in
          following
        </h3>

        <div className="mx-auto mt-10 w-11/12 md:w-4/5 lg:w-3/5 text-left">
          <div className="flex">
            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">Languages/Frameworks</div>
              <div>TypeScript, Javascript, NodeJs, Laravel</div>
            </div>

            <div className="p-4 basis-1/2 bg-white">
              <div className="font-bold">DBMS</div>
              <div>MySQL, Ms-Sql-Server, SQLite</div>
            </div>
          </div>

          <div className="flex">
            <div className="p-4 basis-1/2 bg-white">
              <div className="font-bold">CI/CD</div>
              <div>GitHub&nbsp;Actions, Azure&nbsp;pipelines, Docker</div>
            </div>

            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">Packages/Techniques</div>
              <div>
                Transact&nbsp;Query, Redux, Axios, JWT&nbsp;Authentication,
                REST&nbsp;API
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">CSS Frameworks</div>
              <div>Tailwindcss, Material&nbsp;UI, Bulma</div>
            </div>

            <div className="p-4 basis-1/2 bg-white">
              <div className="font-bold">Testing</div>
              <div>WebDriverIO, Jest</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 py-20 text-center bg-white">
        <h2
          className={`${lora.className} text-2xl sm:text-3xl md:text-4xl font-medium capitalize text-title-primary px-4`}
        >
          Education
        </h2>

        <div className="">
          <div className="mx-auto pl-4 w-11/12 md:w-4/5 xl:w-3/5">
            <div className=" mt-10">
              <div className="text-xl md:text-2xl">
                Bachelor of Science in Computer Science (2017-2021)
              </div>
              <div className="md:text-lg">
                at University of Jaffna, Sri Lanka
              </div>
            </div>

            <div className=" mt-10">
              <div className="text-xl md:text-2xl">
                Algorithms on Graphs (Certificate Course)
              </div>
              <div className="md:text-lg">
                at University of California San Diego, Coursera
              </div>
            </div>

            <div className=" mt-10">
              <div className="text-xl md:text-2xl">
                Certificate in English for higher education and employment
              </div>
              <div className="md:text-lg">at Sri Palee Campus, Sri Lanka</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 py-20 text-center">
        <h3 className="md:text-xl font-semibold text-gray-600 mx-auto pl-4 w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2">
          I post technical content on my blog and share useful stuff on twitter.
          Please check them out If you’re interested. Thank you for your time!
        </h3>
      </section>

      <section className="mt-12 md:mt-20 pt-10 flex items-center flex-col px-3">
        <h2
          id="lets-start"
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          let&apos;s get started!
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5 text-center">
          I would love the chance to work for you
        </h3>

        <div className="mt-4 md:mt-10 w-full md:w-4/5 lg:w-3/5  xl:w-1/2">
          <CtaForm />
        </div>
      </section>
    </main>
  );
}
