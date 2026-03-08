'use client';

import Image from 'next/image';
import CustomCarousel from './carousel/CustomCarousel';

export default function ProjectDetailModel({ project, onClickClose }: any) {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-[#5f4c725f] flex items-center justify-center py-12 lg:py-0">
      <div className="w-11/12 h-3/4 bg-background-default p-2 lg:p-4 relative overflow-auto border border-border-secondary">
        <div className="absolute right-2 lg:right-4 cursor-pointer" onClick={onClickClose}>
          <Image
            src={'/icons/cross.svg'}
            alt="Cross Icon"
            width={20}
            height={20}
          />
        </div>

        <div className="text-3xl text-center font-semibold">{project.name}</div>

        <div className="lg:flex gap-x-4 pt-2 lg:pt-4">
          <div className="basis-3/5 h-[65vh]">
            <CustomCarousel autoSlide={false} showLinkDots={false}>
              {project.descImages.map((img: any) => (
                <div key={img.alt} className="h-full w-full relative">
                  <Image
                    src={img.path}
                    alt={img.alt}
                    fill={true}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </CustomCarousel>
          </div>

          <div className="basis-2/5 p-2 pt-4 lg:p-0 h-[65vh] overflow-auto text-left">
            Tasks performed: {project.tasks}
            <br />
            <br />
            Tools used: <b>{project.techStack.join(', ')}</b>
            <br />
            <br />

            {project.longDesc}
          </div>
        </div>
      </div>
    </div>
  );
}
