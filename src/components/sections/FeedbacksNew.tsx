import { motion } from 'framer-motion';
import { useState } from 'react';

import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import { testimonials } from '../../constants';
import { Header } from '../atoms/Header';
import { TTestimonial } from '../../types';
import { config } from '../../constants/config';

const AvatarWithFallback: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={`h-10 w-10 rounded-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#915EFF] to-[#7c3aed] text-white font-semibold text-sm">
          {alt.split(' ')[1]?.[0]?.toUpperCase() || '?'}
        </div>
      )}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 h-10 w-10 rounded-full bg-gray-300 animate-pulse" />
      )}
    </div>
  );
};

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 w-full rounded-3xl p-10"
  >
    <p className="text-[48px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-1 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <AvatarWithFallback
          src={image}
          alt={`feedback_by-${name}`}
          className="h-10 w-10"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
