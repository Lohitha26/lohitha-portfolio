import { useEffect, useState } from 'react';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';

const SkillBar = ({ name, proficiency, icon }: { name: string, proficiency: number, icon: string }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          <span className="text-white font-medium text-lg">{name}</span>
        </div>
        <span className="text-[#915EFF] font-bold text-lg">{proficiency}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#915EFF] to-[#7c3aed] h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
};

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

        // 3D view related code removed as it's not being used
      } catch (error) {
        console.error(error);
      }
    };

    preloadImages();
  }, []);

  // Removed unused positions generation code

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Proficient in modern web technologies and development tools, with hands-on experience across the full stack.
        </p>
      </div>

      {/* Skills Grid - Desktop */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-16">
        {technologies.map((technology) => (
          <SkillBar
            key={technology.name}
            name={technology.name}
            proficiency={technology.proficiency || 80}
            icon={loadedIcons[technology.name] || technology.icon}
          />
        ))}
      </div>

      {/* Skills List - Mobile/Tablet */}
      <div className="lg:hidden mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {technologies.map((technology) => (
            <div key={technology.name} className="bg-tertiary rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={loadedIcons[technology.name] || technology.icon}
                  alt={technology.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white font-medium">{technology.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#915EFF] to-[#7c3aed] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${technology.proficiency || 80}%` }}
                />
              </div>
              <span className="text-[#915EFF] text-sm font-bold mt-1 block">
                {technology.proficiency || 80}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Visualization */}
      {/* <div className="w-full h-[500px] lg:h-[600px] relative">
        <div className="absolute top-0 left-0 right-0 text-center z-10">
          <h3 className="text-2xl font-bold text-white mb-2">Interactive 3D View</h3>
          <p className="text-gray-300 text-sm">Hover and drag to explore the technologies</p>
        </div>

        {show3D && (
          <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
            camera={{
              position: [0, 0, 20],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={0.5} />
              <pointLight position={[-10, -10, -10]} intensity={0.3} />

              {technologies.map((technology, index) => (
                <TechBall
                  key={technology.name}
                  position={positions[index]}
                  imgUrl={loadedIcons[technology.name] || technology.icon}
                />
              ))}

              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                maxDistance={50}
                minDistance={10}
              />
              <Preload all />
            </Suspense>
          </Canvas>
        )}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
