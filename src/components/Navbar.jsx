"use client";

import { authClient, signOut } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { RiseLoader } from "react-spinners";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  const handleLogout = async () => {
    try {
      await signOut();

      toast.success("Logout successfully!");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      toast.error("Failed to logout.");
    }
  };

  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="Middle-side-logo">
          <Image
            src={"/assets/Wanderlast.png"}
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
        <div className="Right-side-links">
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/destinations"}>Destinations</Link>
            </li>
            <li>
              <Link href={"/my-bookings"}>My Bookings</Link>
            </li>
            {/* Module: 52.3 */}
            <li>
              <Link href={"/add-destination"}>Add Destination</Link>
            </li>
          </ul>
        </div>

        <div className="Left-side-links">
          {isPending ? (
            <div className="mr-15">
              <RiseLoader speedMultiplier={1} color="#3b76cb" size={5} />
            </div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <div>
                <Avatar>
                  <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </div>
              <div className="hidden sm:block text-right leading-tight">
                <p className="text-xs text-black/70">Welcome</p>

                <p className="text-sm md:text-base font-semibold truncate max-w-22.5 md:max-w-35">
                  {user.name}
                </p>
              </div>

              <Link href="/">
                <Button
                  className="px-4 py-1 text-sm font-bold  rounded-2xl hover:bg-gray-100 transition-colors"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </div>
          ) : isPending ? (
            <div className="mr-15">
              <RiseLoader speedMultiplier={1} color="#3b76cb" size={5} />
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/signin">
                <Button
                  radius="sm"
                  className=" bg-[#15A1BF] text-white rounded-xl hover:scale-105 transition-all duration-300 py-1 px-5 md:px-8 font-medium shadow-lg"
                >
                 Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  radius="sm"
                  className=" bg-[#69c3d7] text-white rounded-xl hover:scale-105 transition-all duration-300 py-1 px-5 md:px-8 font-medium shadow-lg"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
