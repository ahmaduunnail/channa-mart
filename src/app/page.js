import Banner from "@/component/banner";
import CardOverview from "@/component/card-overview";
import Navbar from "@/component/navbar";
import Pengalaman from "@/component/pengalaman";
import Recomendation from "@/component/recomendation";
import BgRecomendation from "../../public/recomendation-ornamen.svg";
import BgExperience from "../../public/ornamen-pengalaman-bg.svg";

export default function Home() {
  return (
    <>
      <section
        className="pt-8 px-20 overflow-hidden bg-neutral"
        id="main"
      >
        <Navbar />
        <Banner />
      </section>
      <section className="mx-20" id="overview">
        <CardOverview />
      </section>
      <section
        className="px-20 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgRecomendation.src})` }}
        id="rekomendasi"
      >
        <Recomendation />
      </section>
      <section className="px-20 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${BgExperience.src})` }} id="pengalaman">
        <Pengalaman />
      </section>
    </>
  );
}
