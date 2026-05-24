import BookingCancelAlert from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Eye } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingPage = async () => {
  // Module: 52.7 better auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // Module: 52.8
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`);

  const bookings = await res.json();

  return (
    // Module: 52.7
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl">My Bookings</h2>
      <div>
        {/* Module: 53.8 */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex justify-between mb-6 p-6 shadow-lg"
          >
            <div className="flex gap-6">
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                height={300}
                width={300}
              ></Image>
              <div>
                <div>
                  <h1 className="font-semibold text-[40px]">
                    {booking.destinationName}
                  </h1>
                </div>
                <div className="my-6">
                  <p className="text-[#6C696D]">
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
                  <p className="text-[#6C696D]">Booking ID: {booking._id}</p>
                </div>
                <div>
                  <p className="font-semibold text-[30px] text-[#38aec8]">
                    $ {booking.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-end">
              {/* Module: 53.8 */}
              <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>
              <Link href="/destinations">
                <Button className={"rounded-none"} varient="outline">
                  <Eye></Eye>
                  Back to destinations
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
