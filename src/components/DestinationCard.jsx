import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { Button } from "@heroui/react";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    _id
  } = destination;
  return (
    // Module: 52.4
    <div className="rounded-lg shadow-md overflow-hidden">
      <div className="overflow-hidden">
        <Image
          alt={destinationName}
          height={400}
          width={400}
          src={imageUrl}
          className="h-50 object-cover w-full rounded-t-lg transition-transform duration-500 hover:scale-125"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <FaMapPin /> <span>{country}</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{destinationName}</h2>
          <div className="flex items-center">
            <BsCurrencyDollar />{" "}
            <h2 className="text-xl font-bold">
              {" "}
              <span>{price}</span>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SlCalender /> <span>{duration}</span>
        </div>

        {/* Module: 52.5 */}
        <Link href={`/destinations/${_id}`}>
          <Button variant="ghost" className="mt-2 text-cyan-500">
            <span>Book Now</span>
            <LuExternalLink className=" text-cyan-500" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
