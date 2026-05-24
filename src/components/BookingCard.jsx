"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { redirect } from "next/navigation";
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
      return; // ইউজার না থাকলে ফাংশন এখানেই থেমে যাবে
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
    // console.log(bookingData);

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      toast.success("You booked successfully");
    } catch (error) {
      toast.error("Booking Unsuccessfull!");
    }
  };

  return (
    // Module: 53.5
    <div>
      <Card>
        <h2>Starting from</h2>
        <div className="flex items-center text-2xl font-bold text-[#15A1BF]">
          <BsCurrencyDollar />
          {price}
        </div>

        <DateField
          className="w-[256px]"
          name="date"
          // Module: 53.6
          onChange={setDepartureDate}
        >
          <Label>Booking Date</Label>
          <DateField.Group className="rounded-none">
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
        <Button
          onClick={handleBooking}
          className="w-full rounded-b-xl rounded-t-none bg-[#15A1BF]"
        >
          Book Now
        </Button>
      </Card>
    </div>
  );
};

export default BookingCard;
