import BookingCard from "@/components/BookingCard";
import DeleteModal from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
// import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaMapPin } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const DestinationDetailsPage = async ({ params }) => {
  // Module: 52.5
  const { id } = await params;
  // Module: 54.4
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`,
    // Module: 54.2
    {
      headers: {
        // Module: 54.4
        authorization: `Bearer ${token}`,
      },
    },
  );
  const destination = await res.json();
  console.log(destination);

  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    _id,
    description,
  } = destination;

  return (
    // Module: 52.5
    <div className="container mx-auto space-y-5 py-5 md:py-10">
      {/* Module: 52.6 */}
      <div className="flex items-center px-5 justify-between">
        <Link href="/destinations">
          <button className="text-xl font-semibold">All Collections</button>
        </Link>
        <div className="flex items-center gap-2">
          <EditModal destination={destination}></EditModal>
          {/* Module: 52.7 */}
          <DeleteModal destination={destination}></DeleteModal>
        </div>
      </div>

      <div className="overflow-hidden p-5">
        <Image
          src={imageUrl}
          alt={destinationName}
          height={500}
          width={800}
          className="p-5 h-60 md:h-130 w-full rounded-lg shadow-md object-cover"
        ></Image>
      </div>

      <div className="flex-cols md:flex justify-between p-5 gap-10">
        <div className="flex p-5 justify-between">
          <div className="space-y-5">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <FaMapPin /> <span>{country}</span>
              </div>

              <h2 className="text-4xl md:text-[60px] font-medium">
                {destinationName}
              </h2>

              <div className="flex items-center gap-2">
                <SlCalender />{" "}
                <span className="text-lg font-medium">{duration}</span>
              </div>
            </div>
            <div className="">
              <h2 className="text-3xl font-medium">Overview</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div>
          <BookingCard destination={destination}></BookingCard>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;

// import BookingCard from "@/components/BookingCard";
// import DeleteModal from "@/components/DeleteModal";
// import { EditModal } from "@/components/EditModal";
// import { auth } from "@/lib/auth";
// import { Button } from "@heroui/react";
// import { headers } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import { FaMapPin } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";

// const DestinationDetailsPage = async ({ params }) => {
//   // Module: 52.5
//   const { id } = await params;
//   // Module: 54.4
//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`,
//     // Module: 54.2
//     {
//       headers: {
//         // Module: 54.4
//         authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   const destination = await res.json();
//   console.log(destination);

//   const {
//     destinationName,
//     country,
//     category,
//     price,
//     duration,
//     departureDate,
//     imageUrl,
//     _id,
//     description,
//   } = destination;

//   return (
//     // Module: 52.5
//     <div className="container mx-auto space-y-10 py-15">
//       {/* Module: 52.6 */}
//       <div className="flex items-center justify-between">
//         <Link href="/destinations">
//           <button>Back to Collections</button>
//         </Link>
//         <div className="flex items-center gap-2">
//           <EditModal destination={destination}></EditModal>
//           {/* Module: 52.7 */}
//           <DeleteModal destination={destination}></DeleteModal>
//         </div>
//       </div>
//       <div className="overflow-hidden">
//         <Image
//           src={imageUrl}
//           alt={destinationName}
//           height={500}
//           width={800}
//           className=" h-100 w-full"
//         ></Image>
//       </div>
//       <div className="flex justify-between">
//         <div className="space-y-5">
//           <div className="">
//             <div className="flex items-center gap-2">
//               <FaMapPin /> <span>{country}</span>
//             </div>

//             <h2 className="text-[60px] font-medium">{destinationName}</h2>

//             <div className="flex items-center gap-2">
//               <SlCalender />{" "}
//               <span className="text-lg font-medium">{duration}</span>
//             </div>
//           </div>
//           <div className="">
//             <h2 className="text-3xl font-medium">Overview</h2>
//             <p>{description}</p>
//           </div>
//         </div>
//         <div>
//           <BookingCard destination={destination}></BookingCard>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationDetailsPage;
