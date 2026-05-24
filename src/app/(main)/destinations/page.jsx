import DestinationCard from "@/components/DestinationCard";

const destinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination`, {
    cache: "no-store",
  });
  const destinations = await res.json();

  return (
    // Module: 52.4
    <div className="max-w-7xl mx-auto space-y-5 my-5 px-5">
      <h1>All Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default destinationPage;
