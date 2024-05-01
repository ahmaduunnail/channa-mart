import Banner from "@/component/banner";
import Card from "@/component/card";
import Navbar from "@/component/navbar";
import Recomendation from "@/component/recomendation";

export default function Home() {
  return (
    <>
      <section className="bg-neutral pt-8 px-20 overflow-hidden scroll-smooth" id="main">
        <Navbar />
        <Banner />
      </section>
      <section className="mx-20" id="overview">
        <Card />
      </section>
      <section className="px-20" id="rekomendasi">
        <Recomendation/>
      </section>
      <section className="mx-20" id="pengalaman">

      </section>
    </>
  );
}
