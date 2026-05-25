import BookingCancelAlert from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingPage = async () => {
  // Module: 52.7 better auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Module: 54.6
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  // Module: 52.8
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`,
    {
      headers: {
        // Module: 54.6
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const bookings = await res.json();

  return (
    <div className="container mx-auto px-5 md:px-4 py-5 space-y-5 md:py-8">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h2
          className="
          font-bold
          text-2xl
          md:text-4xl
          
        "
        >
          My Bookings
        </h2>

        {/* Back Button */}
        <Link href="/destinations" className="md:w-full sm:w-auto">
          <Button className="bg-transparent text-[#15A1BF] text-md shadow-md p-4">
            Back to destinations
          </Button>
        </Link>
      </div>

      {/* Booking List */}
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="
              flex
              flex-col
              lg:flex-row
              justify-between
              gap-6
              p-4
              sm:p-6
              rounded-2xl
              shadow-lg
              border
              bg-white
            "
          >
            {/* Left Side */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-5
                w-full
              "
            >
              {/* Image */}
              <div className="w-full sm:w-63 lg:w-75">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  width={300}
                  height={300}
                  className="
                    w-full
                    h-55
                    sm:h-63
                    object-cover
                    rounded-xl
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h1
                    className="
                      font-bold
                      text-2xl
                      sm:text-3xl
                      md:text-4xl
                      leading-tight
                    "
                  >
                    {booking.destinationName}
                  </h1>

                  <div className="my-5 space-y-2">
                    <p
                      className="
                        text-sm
                        sm:text-base
                        text-[#6C696D]
                      "
                    >
                      Departure:{" "}
                      {new Date(booking.departureDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        text-[#6C696D]
                        break-all
                      "
                    >
                      Booking ID: {booking._id}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <p
                    className="
                      font-bold
                      text-2xl
                      sm:text-3xl
                      text-[#38aec8]
                    "
                  >
                    $ {booking.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                lg:flex-col
                gap-4
                justify-end
                lg:items-end
                w-full
                lg:w-auto
              "
            >
              {/* Cancel Button */}
              <div className="w-full sm:w-auto">
                <BookingCancelAlert bookingId={booking._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;

// import BookingCancelAlert from "@/components/BookingCancelAlert";
// import { auth } from "@/lib/auth";
// import { Eye } from "@gravity-ui/icons";
// import { Button } from "@heroui/react";
// import { headers } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";

// const MyBookingPage = async () => {
//   // Module: 52.7 better auth
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });
//   // Module: 54.6
//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });

//   const user = session?.user;

//   // Module: 52.8
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`,
//     {
//       headers: {
//         // Module: 54.6
//         authorization: `Bearer ${token}`,
//       },
//     },
//   );

//   const bookings = await res.json();

//   return (
//     // Module: 52.7
//     <div className="container mx-auto">
//       <h2 className="font-bold text-2xl">My Bookings</h2>
//       <div>
//         {/* Module: 53.8 */}
//         {bookings.map((booking) => (
//           <div
//             key={booking._id}
//             className="flex justify-between mb-6 p-6 shadow-lg"
//           >
//             <div className="flex gap-6">
//               <Image
//                 src={booking.imageUrl}
//                 alt={booking.destinationName}
//                 height={300}
//                 width={300}
//               ></Image>
//               <div>
//                 <div>
//                   <h1 className="font-semibold text-[40px]">
//                     {booking.destinationName}
//                   </h1>
//                 </div>
//                 <div className="my-6">
//                   <p className="text-[#6C696D]">
//                     Departure:{" "}
//                     {new Date(booking.departureDate).toLocaleDateString(
//                       "en-US",
//                       {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       },
//                     )}
//                   </p>
//                   <p className="text-[#6C696D]">Booking ID: {booking._id}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-[30px] text-[#38aec8]">
//                     $ {booking.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-5 items-end">
//               {/* Module: 53.8 */}
//               <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>
//               <Link href="/destinations">
//                 <Button className={"rounded-none"} varient="outline">
//                   <Eye></Eye>
//                   Back to destinations
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyBookingPage;
