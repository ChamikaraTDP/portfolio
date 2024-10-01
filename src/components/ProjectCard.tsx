'use client';

import Image from 'next/image';
import { mulish } from '../app/fonts';
import { useEffect, useState } from 'react';
import ProjectDetailModel from './ProjectDetailModel';

export default function ProjectCard({ project }: any) {
  const [isOpenModel, setIsOpenModel] = useState(false);

  useEffect(() => {
    var body = document.getElementById('body-tdp');

    if (!body) return;

    if (isOpenModel) {
      body.style.height = '100vh';
      body.style.overflow = 'hidden';
    } else {
      body.style.height = 'auto';
      body.style.overflow = 'auto';
    }
  }, [isOpenModel]);

  return (
    <div className="flex justify-center lg:items-center flex-wrap lg:flex-nowrap sm:px-5 mb-10 sm:mb-20 lg:mb-[100px]">
      <div
        className={`${project.imageFirst ? 'lg:mr-20' : 'lg:hidden'} shadow cursor-pointer`}
        onClick={() => setIsOpenModel(true)}
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
          project.imageFirst ? '' : 'lg:mr-20'
        }`}
      >
        <h4
          className={`${mulish.className} text-center text-3xl font-semibold cursor-pointer`}
          onClick={() => setIsOpenModel(true)}
        >
          {project.name}
        </h4>
        <p className="sm:text-center lg:text-left text-lg lg:text-xl mt-5">
          {project.description}
        </p>
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
          Tasks Performed: {project.tasks}
        </h5>
      </div>

      {!project.imageFirst && (
        <div
          className="hidden lg:block shadow cursor-pointer"
          onClick={() => setIsOpenModel(true)}
        >
          <Image
            src="/images/hupe.png"
            alt="screenshot showing form sujathas-anthurium website"
            width={500}
            height={280}
          />
        </div>
      )}

      {isOpenModel && (
        <ProjectDetailModel
          project={project}
          onClickClose={() => setIsOpenModel(false)}
        />
      )}
    </div>
  );
}
