import { useRouter } from "next/router";
import { Nav, Footer, InfoCard, Map } from "../components/index";
import { format } from "date-fns";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Nav placeholder={`${location} | ${range} | ${numberOfGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} guest
            {numberOfGuests > 1 && "s"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Bed</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              (
                { img, location, title, description, star, price, total },
                index
              ) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  key={index}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz")
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return {
    props: {
      searchResults,
    },
  };
}
