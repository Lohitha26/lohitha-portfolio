import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { Suspense, useEffect, useState } from 'react';

const Tech = () => {
  const [loadedIcons, setLoadedIcons] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const preloadImages = async () => {
      const promises = technologies.map(tech => {
        return new Promise<{ name: string; icon: string }>((resolve, reject) => {
          const img = new Image();
          img.src = tech.icon;
          img.onload = () => resolve({ name: tech.name, icon: tech.icon });
          img.onerror = () => reject(`Failed to load ${tech.icon}`);
        });
      });

      try {
        const loaded = await Promise.all(promises);
        const iconsMap: { [key: string]: string } = {};
        loaded.forEach(({ name, icon }) => {
          iconsMap[name] = icon;
        });
        setLoadedIcons(iconsMap);
      } catch (error) {
        console.error(error);
      }
    };

    preloadImages();
  }, []);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="h-28 w-28" key={technology.name}>
            <Suspense fallback={null}>
              <BallCanvas icon={loadedIcons[technology.name] || technology.icon} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
