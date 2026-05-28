import { DownloadSection } from "@/components/marketing/DownloadSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { LeaderboardSection } from "@/components/marketing/LeaderboardSection";
import { ScreenshotsSection } from "@/components/marketing/ScreenshotsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <LeaderboardSection />
      <DownloadSection />
    </>
  );
}
