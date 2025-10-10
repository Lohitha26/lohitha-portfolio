import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full h-full min-h-[500px] rounded-2xl p-5 flex flex-col">
          <div className="relative h-[230px] w-full flex-shrink-0">
            <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex-1 flex flex-col">
            <h3 className="text-[24px] font-bold text-white flex-shrink-0">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] flex-1 leading-relaxed">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2 flex-shrink-0">
              {tags.map(tag => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div
        className="
    mt-20
    grid
    gap-7
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-2
    auto-rows-fr
  "
      >
        {projects.map((project, index) => {
          const isLastOdd =
            projects.length % 2 === 1 && index === projects.length - 1;
          return (
            <div
              key={`project-${index}`}
              className={
                isLastOdd
                  ? 'lg:col-start-1 lg:col-end-3 flex justify-center'
                  : ''
              }
            >
              <div className="w-full max-w-md">
                <ProjectCard index={index} {...project} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
