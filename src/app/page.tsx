import Footer from "@/components/footer";
import SocialMedia from "@/components/social-media";
import Arang from "@/sections/arang";
import Events from "@/sections/events";
import Hero from "@/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <Arang />
      <SocialMedia />
      <Footer />
    </>
  );
}
