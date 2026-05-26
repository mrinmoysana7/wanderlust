import { Button } from "@heroui/react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";

const FeaturedPage = async () => {
  // Module: 54.9
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const destinations = await res.json();

  return (
    <div className="mx-auto max-w-7xl py-10 p-5">
      <div className="md:flex justify-between space-y-5 items-center">
        <div>
          <h1 className="text-3xl md:text-[60px]">Featured Destinations</h1>
          <p>Handpicked travel experiences for the adventure seekers</p>
        </div>
        <div>
          <Link href="/destinations">
            <Button
              className="rounded-none text-[#15A1BF] border-2 border-cyan-400"
              variant="outline"
            >
              ALL DESTINATIONS
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
        {destinations.map((destination) => (
          <DestinationCard
            destination={destination}
            key={destination._id}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
