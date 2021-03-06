import Head from "next/head";
import {
  Nav,
  Hero,
  SmallCard,
  MediumCard,
  LargeCard,
  Footer,
} from "../components/index";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull some data from a server - api endpoints */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }, index) => (
              <SmallCard
                img={img}
                location={location}
                distance={distance}
                key={index}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-8">Live Anywhere</h2>
          {/* pull some data from a server - api endpoints */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard img={img} title={title} key={index} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(`https://links.papareact.com/pyp`)
    .then((response) => response.json())
    .catch((error) => console.log(error));

  const cardsData = await fetch(`https://links.papareact.com/zp1`)
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
