import Image from 'next/image';
import { lora } from '@app/fonts';

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
    name: 'Laravel',
    iconPath: '/icons/laravel.svg',
  },
];

export default function About() {
  return (
    <main className="">
      <section className="relative h-[545px]">
        <Image
          src="/images/chamikara-at-work.v01.png"
          quality={100}
          alt="Screenshot of my code editor"
          fill
          style={{ objectFit: 'cover' }}
        />

        <div className="absolute bottom-0 text-center text-text-white w-full">
          <h1
            className={`${lora.className} inline-block text-4xl md:text-5xl lg:text-6xl font-bold mb-10 p-5 px-10`}
            style={{
              backgroundImage:
                'radial-gradient(farthest-side, rgba(142, 76, 138, 0.6), rgba(0, 0, 0, 0))',
            }}
          >
            About Me
          </h1>
        </div>
      </section>

      <section className="mt-16 flex justify-center">
        <div className="w-11/12 sm:w-4/5 md:w-3/5 text-center">
          <h2
            className={`${lora.className} text-2xl sm:text-3xl md:text-4xl font-medium capitalize text-title-primary`}
          >
            A Brief
          </h2>

          <p className="text-center lg:text-left sm:text-lg mt-5">
            While back in university I used to participate in hackathons and
            coding competitions. By doing so I was able to meet professionals
            from the software industry. It&apos;s from them that I learned that
            I have to learn more than what It&apos;s being taught in the
            university if I am about to be a successful software developer. So I
            learned much outside of the university curriculum spending every bit
            of spare time I had. When I joined DFAR (IT division, Department of
            Fisheries and Aquatic Resources) for training they asked me to
            create an inventory system to replace their handwritten ledgers. I
            was able to create a working system. Finally after many unsuccessful
            projects this was my first successful venture. After the training,
            while continuing the studies, I started to give side support for a
            freelancer. I learned much about freelancing from him. After
            graduating I worked full time for a few companies until I decided to
            start working as a freelancer. <br /> <br /> I like to talk with
            clients, understand their businesses and be involved as it is my
            own. I also enjoy learning new tools and technologies and understand
            what problems they solve and for what specific use case they are
            good at. So that I can leverage them as it fits best.
            <br /> <br />
          </p>
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
            <div key={stackItem.name} className='p-4 flex flex-col items-center'>
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
          following tools
        </h3>

        <div className="mx-auto mt-10 w-11/12 md:w-4/5 lg:w-3/5 text-left">
          <div className="flex">
            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">CMS</div>
              <div>Wordpress, Shopify</div>
            </div>

            <div className="p-4 basis-1/2 bg-white">
              <div className="font-bold">DBMS</div>
              <div>MySQL, MongoDB, SQLite</div>
            </div>
          </div>

          <div className="flex">
            <div className="p-4 basis-1/2 bg-white">
              <div className="font-bold">CI/CD</div>
              <div>GitHub&nbsp;Actions</div>
            </div>

            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">Design Tools</div>
              <div>Figma, Adobe&nbsp;Illustrator</div>
            </div>
          </div>

          <div className="flex">
            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">CSS Frameworks</div>
              <div>Tailwind, Material&nbsp;UI, Bulma</div>
            </div>

            <div className="p-4 basis-1/2 bg-white">
              <div className="font-bold">Testing</div>
              <div>WebDriverIO</div>
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
              <div className="md:text-lg">at University of Jaffna, Sri Lanka</div>
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
          Please check them out If you’re interested. Thanks!
        </h3>
      </section>
    </main>
  );
}
