import Image from "next/image";
import { lora, mulish } from "@app/fonts";

export default function About() {
  return (
    <main className="">
      <section className="relative h-[545px]">
        <Image
          src="/images/Screenshot from 2024-07-24 17-59-21.png"
          quality={100}
          alt="Screenshot of my code editor"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="absolute bottom-0 text-center text-text-white w-full">
          <h1
            className={`${lora.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-10`}
          >
            About Me
          </h1>

          {/* <div className="flex justify-center">
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
          </div> */}
        </div>
      </section>

      <section className="mt-16 flex justify-center">
        <div className="w-4/5 md:w-3/5 text-center">
          <h2
            className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
          >
            A Brief
          </h2>

          <p className="sm:text-center lg:text-left text-lg mt-5">
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
            good at. So that I can leverage them as it fits best. So here I am.{" "}
            <br /> <br />
            Thank you for reading!
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-20 py-20 bg-[#F8FBCD]">
        <h2
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          Technology stack I&apos;m Familiar with
        </h2>

        <div className="mt-16 w-4/5 md:w-3/5 flex justify-between">
          <div>
            <div className="h-[143px]">
              <Image
                src="/icons/react.svg"
                width={143}
                height={143}
                alt="react icon"
              />
            </div>

            <h4 className="mt-5 text-2xl">React</h4>
          </div>
          <div>
            <div className="h-[143px]">
              <Image
                src="/icons/nestjs.svg"
                width={143}
                height={143}
                alt="react icon"
              />
            </div>

            <h4 className="mt-5 text-2xl">NestJs</h4>
          </div>
          <div>
            <div className="h-[143px]">
              <Image
                src="/icons/nextjs.svg"
                width={143}
                height={143}
                alt="react icon"
              />
            </div>

            <h4 className="mt-5 text-2xl">NextJs</h4>
          </div>
          <div>
            <div className="h-[143px]">
              <Image
                src="/icons/react.svg"
                width={143}
                height={143}
                alt="react icon"
              />
            </div>

            <h4 className="mt-5 text-2xl">React Native</h4>
          </div>
          <div>
            <div className="h-[143px]">
              <Image
                src="/icons/postgresql.png"
                width={143}
                height={143}
                alt="react icon"
              />
            </div>

            <h4 className="mt-5 text-2xl">PostgreSQL</h4>
          </div>
          <div>
            <div className="h-[143px]">
              <Image
                src="/icons/laravel.svg"
                width={143}
                height={143}
                alt="react icon"
              />
            </div>

            <h4 className="mt-5 text-2xl">Laravel</h4>
          </div>
        </div>
      </section>

      <section className="mt-14 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-title-primary mt-5">
          Other than the main stack listed above I&apos;m well versed in
          following tools
        </h3>

        <div className="mx-auto mt-10 w-4/5 md:w-3/5 text-left">
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
              <div>GitHub Actions</div>
            </div>

            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">Design Tools</div>
              <div>Figma, Adobe Illustrator</div>
            </div>
          </div>

          <div className="flex">
            <div className="p-4 basis-1/2 bg-background-secondary">
              <div className="font-bold">CSS Frameworks</div>
              <div>Tailwind, Material UI, Bulma</div>
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
          className={`${lora.className} text-3xl md:text-4xl font-medium capitalize text-title-primary`}
        >
          Education
        </h2>

        <div className="">
          <div className="mx-auto pl-4 w-4/5 md:w-3/5">
            <div className=" mt-10">
              <div className="text-2xl">
                Bachelor of Science in Computer Science (2017-2021)
              </div>
              <div className="text-lg">at University of Jaffna, Sri Lanka</div>
            </div>

            <div className=" mt-10">
              <div className="text-2xl">
                Algorithms on Graphs (Certificate Course)
              </div>
              <div className="text-lg">
                at University of California San Diego, Coursera
              </div>
            </div>

            <div className=" mt-10">
              <div className="text-2xl">
                Certificate in English for higher education and employment
              </div>
              <div className="text-lg">at Sri Palee Campus, Sri Lanka</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 py-20 text-center">
        <h3 className="text-xl font-semibold text-gray-600 mx-auto pl-4 w-4/5 md:w-3/5 lg:w-1/2">
          I post technical content on my blog and share useful stuff on twitter.
          Please check them out If you’re interested. Thanks!
        </h3>
      </section>
    </main>
  );
}
