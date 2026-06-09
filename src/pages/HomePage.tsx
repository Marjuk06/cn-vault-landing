import { HeroSection } from '../sections/HeroSection';
import { ShowcaseSection } from '../sections/ShowcaseSection';
import { PillarsSection } from '../sections/PillarsSection';
import { ArchitectureSection } from '../sections/ArchitectureSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { PerformanceSection } from '../sections/PerformanceSection';
import { GallerySection } from '../sections/GallerySection';
import { RoadmapSection } from '../sections/RoadmapSection';
import { OpenSourceSection } from '../sections/OpenSourceSection';
import { FinalCTASection } from '../sections/FinalCTASection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <PillarsSection />
      <ArchitectureSection />
      <FeaturesSection />
      <PerformanceSection />
      <GallerySection />
      <RoadmapSection />
      <OpenSourceSection />
      <FinalCTASection />
    </>
  );
};
