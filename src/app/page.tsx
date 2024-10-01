import Image from 'next/image';
import { lora, mulish } from './fonts';
import ChevronLeftIcon from '@assets/chevron-left.svg';
import ChevronRightIcon from '@assets/chevron-right.svg';
import CtaForm from '../components/CtaForm';
import ProjectCard from '../components/ProjectCard';

const services = [
  {
    name: 'Design',
    iconPath: '/icons/creativity.png',
    description:
      'A good website is one that displays a careful balance between appearance and functionality. It can help you create a compelling and powerful first impression, turning visitors into paying customers.',
  },
  {
    name: 'Development',
    iconPath: '/icons/software.png',
    description:
      'Fast and reliable development experience that makes the ends meet. Whether it is a simple website or complex web/mobile app I got you covered.',
  },
  {
    name: 'SEO',
    iconPath: '/icons/seo.png',
    description:
      'Search Engine Optimization is important for your sites visibility in search results. Good SEO make sure your potential clients find you when they really need you.',
  },
  {
    name: 'Marketing',
    iconPath: '/icons/search-engine.png',
    description:
      'Generate leads and boost sales with paid advertisements, social media marketing, email marketing and many other strategies.',
  },
];

const projects = [
  {
    name: 'OnCoor',
    description:
      'OnCoor Inc, know for their robust and comprehensive data management platform, which offers data warehousing, validation, analytics and many other services. I helped them build this exact system.',
    imageAlt: 'screenshot showing OnCoor web app',
    imagePath: '/images/oncoor.png',
    tasks: 'Backend-Development, Frontent-Develpoment, Scripting and Hosting',
    siteLink: 'https://oncoor.com',
    siteDisplay: 'oncoor.com',
    imageFirst: true,
    techStack:
      'Backend-Development, Frontent-Develpoment, Scripting and Hosting',
    longDesc: (
      <p>
        OnCoor Inc, know for their robust and comprehensive data management
        platform, which offers data warehousing, validation, analytics and many
        other services. I helped them build this exact system. <br />
        <br /> This was a long-term project. I spent 18 months working full time
        on this. The platform consists of three applications working together.
        Frontend web app (UI) where all the user interactions happen, which
        build with React. Backend application which provides services to other
        two applications. And the Data Processing unit where all the heavy
        lifting data processing happens. <br />
        <br /> In the Frontend (UI) I have created more than 100 different pages
        and more than 20 different reusable components. These pages and
        components address various user requirements. Chart drawings, custom
        vector graphic drawings, PDF generation, PBI integrations and various
        configuration pages, to name a few. Some of these pages require
        real-time updates, to show details about currently executing jobs, as
        well. <br />
        <br /> Backend server application is where the Restful api services are
        implemented. This application leverages NestJs framework features. I had
        to maintain two different database connections (SqlServer and
        Postgresql) and interact with various schemas created within them.
        Instead of implementing CURD services for each and every resource
        separately, I have created a set of reusable CURD services which reduced
        the development time significantly. Other than the Rest apis backend
        application consists of Error handling and reporting features, email
        notification services and automated job scheduling services as well.
        <br />
        <br />
        Data process is where job fetching, queuing and executing happens.Data
        process is capable of handling streams of data from various data sources
        and also monitors and reports each job execution. I had to assign each
        job to its own separate process in order to increase performance and
        make the job management easier.
      </p>
    ),
    descImages: [
      {
        alt: 'screenshot 1 showing Oncoor web app',
        path: '/images/projects/oncoor/oncoor-1.png',
      },
      {
        alt: 'screenshot 2 showing Oncoor web app',
        path: '/images/projects/oncoor/oncoor-2.png',
      },
      {
        alt: 'screenshot 3 showing Oncoor web app',
        path: '/images/projects/oncoor/oncoor-3.png',
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
    techStack: 'Frontent-Develpoment, Image and Content Optimization',
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
    techStack: 'Web Design, Frontend-Development, Hosting and Maintenance',
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
          src="/images/Screenshot from 2024-05-07 00-02-11.v06.png"
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
                className="bg-white shadow hover:shadow-[#DF5EFF80] w-full md:w-[300px] rounded-br-2xl py-6 md:py-10 px-10 text-left"
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
