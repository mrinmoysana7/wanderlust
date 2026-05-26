"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsCurrencyDollar } from "react-icons/bs";

const BookingCard = ({ destination }) => {
  // Module: 53.6
  const { data } = authClient.useSession();

  const user = data?.user;

  const [departureDate, setDepartureDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country } = destination;

  const handleBooking = async () => {
    // Module: 53.6
    if (!user) {
      toast.error("Please login first to book!");
      return;
    }

    const bookingData = {
      userID: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    // Module: 54.6
    const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",

          // Module: 54.6
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      toast.success("You booked successfully");
    } catch (error) {
      toast.error("Booking failed!");
    }
  };

  return (
    <div className="w-full">
      <Card
        className="
          w-full
          p-5
          sm:p-6
          md:px-20
          rounded-2xl
          space-y-6
          shadow-lg
        "
      >
        {/* Heading */}
        <div className="space-y-2">
          <h2
            className="
              text-lg
              sm:text-xl
              font-medium
              text-gray-600
            "
          >
            Starting froms
          </h2>

          {/* Price */}
          <div
            className="
              flex
              items-center
              text-3xl
              sm:text-4xl
              font-bold
              text-[#15A1BF]
            "
          >
            <BsCurrencyDollar />

            <span>{price}</span>
          </div>
        </div>

        {/* Date Field */}
        <div className="w-full">
          <DateField className="w-full" name="date" onChange={setDepartureDate}>
            <Label className="mb-2 block text-sm font-medium">
              Booking Date
            </Label>

            <DateField.Group
              className="
                w-full
                rounded-xl
                border
                md:px-30
                py-2
              "
            >
              <DateField.Input className="w-full">
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        {/* Booking Info */}
        <div
          className="
            bg-gray-50
            rounded-xl
            p-4
            space-y-3
          "
        >
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Destination</span>

            <span className="font-medium text-right">{destinationName}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Country</span>

            <span className="font-medium">{country}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Price</span>

            <span className="font-semibold text-[#15A1BF]">${price}</span>
          </div>
        </div>

        {/* Button */}
        <Button
          onClick={handleBooking}
          className="
            w-full
            rounded-xl
            bg-[#15A1BF]
            hover:bg-[#1088a3]
            transition-all
            duration-300
            text-white
            font-semibold
            py-6
            text-base
            sm:text-lg
          "
        >
          Book Now
        </Button>
      </Card>
    </div>
  );
};

export default BookingCard;

// "use client";

// import { authClient } from "@/lib/auth-client";
// import { Button, Card, DateField, Label } from "@heroui/react";
// import { redirect } from "next/navigation";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { BsCurrencyDollar } from "react-icons/bs";

// const BookingCard = ({ destination }) => {
//   // Module: 53.6
//   const { data } = authClient.useSession();
//   const user = data?.user;

//   const [departureDate, setDepartureDate] = useState(null);
//   const { price, _id, destinationName, imageUrl, country } = destination;

//   const handleBooking = async () => {
//     // Module: 53.6
//     if (!user) {
//       toast.error("Please login first to book!");
//       return; // ইউজার না থাকলে ফাংশন এখানেই থেমে যাবে
//     }
//     const bookingData = {
//       userID: user?.id,
//       userImage: user?.image,
//       userName: user?.name,
//       destinationId: _id,
//       destinationName,
//       price,
//       imageUrl,
//       country,
//       departureDate: new Date(departureDate),
//     };
//     // console.log(bookingData);

//     // Module: 54.6
//     const { data: tokenData } = await authClient.token();
//     // console.log(tokenData);

//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           // Module: 54.6
//           authorization: `Bearer ${tokenData?.token}`,
//         },
//         body: JSON.stringify(bookingData),
//       });

//       const data = await res.json();
//       toast.success("You booked successfully");
//       // window.location.reload();
//     } catch (error) {}
//   };

//   return (
//     // Module: 53.5
//     <div>
//       <Card>
//         <h2>Starting from</h2>
//         <div className="flex items-center text-2xl font-bold text-[#15A1BF]">
//           <BsCurrencyDollar />
//           {price}
//         </div>

//         <DateField
//           className="w-[256px]"
//           name="date"
//           // Module: 53.6
//           onChange={setDepartureDate}
//         >
//           <Label>Booking Date</Label>
//           <DateField.Group className="rounded-none">
//             <DateField.Input>
//               {(segment) => <DateField.Segment segment={segment} />}
//             </DateField.Input>
//           </DateField.Group>
//         </DateField>
//         <Button
//           onClick={handleBooking}
//           className="w-full rounded-b-xl rounded-t-none bg-[#15A1BF]"
//         >
//           Book Now
//         </Button>
//       </Card>
//     </div>
//   );
// };

// export default BookingCard;
