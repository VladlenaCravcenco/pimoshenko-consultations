import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SceneImpact from "@/components/scenes/SceneImpact";
import SceneDisruption from "@/components/scenes/SceneDisruption";
import SceneRawFacts from "@/components/scenes/SceneRawFacts";
import ScenePresence from "@/components/scenes/ScenePresence";
import SceneProcess from "@/components/scenes/SceneProcess";
import ScenePositioning from "@/components/scenes/ScenePositioning";
import SceneLogos from "@/components/scenes/SceneLogos";
import SceneCases from "@/components/scenes/SceneCases";
import SceneProof from "@/components/scenes/SceneProof";
import SceneVoices from "@/components/scenes/SceneVoices";
import SceneFormat from "@/components/scenes/SceneFormat";

import ScenePrice from "@/components/scenes/ScenePrice";
import SceneBooking from "@/components/scenes/SceneBooking";
import SceneFinal from "@/components/scenes/SceneFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <main className="bg-background">
        <SceneImpact />
        <SceneDisruption />
        <SceneRawFacts />
        <ScenePresence />
        <SceneProcess />
        <ScenePositioning />
        <SceneLogos />
        <SceneCases />
        <SceneProof />
        <SceneVoices />
        <SceneFormat />
        <SceneGeography />
        <ScenePrice />
        <SceneBooking />
        <SceneFinal />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
