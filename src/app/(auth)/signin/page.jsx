"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { data: authData, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(authData, error);

    if (error) {
      toast.error(error.message || "An error occurred during registration.");
    } else if (authData) {
      toast.success("Login successful! You are now logged in.");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto min-h-[70vh] p-5 flex justify-center items-center  rounded-xl">
      <ToastContainer></ToastContainer>
      <Form
        className="flex w-96 flex-col gap-4 shadow-2xl p-10 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          isRequired
          //   name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <br></br>
          <Input
            placeholder="Your Email"
            {...register("email")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <FieldError />
        </TextField>

        <TextField className="w-full relative" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full border border-gray-300 p-2 rounded-lg"
              type={isVisible ? "text" : "password"}
              placeholder="Your Password"
              {...register("password")}
            />
            <InputGroup.Suffix className="pr-0 absolute right-2 top-12 -translate-y-1/2">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <Button
          type="submit"
          className="w-full flex items-center justify-center py-3  bg-[#15A1BF] gap-2 text-white rounded-none"
        >
          <Check />
          Sign In
        </Button>
        <div className="flex justify-center items-center gap-3">
          <Separator />
          <div className="whitespace-nowrap">Or Sign in with</div>
          <Separator />
        </div>
        <Button
          onClick={handleGoogleSignin}
          className="w-full bg-white border border-gray-200 text-black rounded-none"
        >
          <FcGoogle />
          Sign in with Google
        </Button>

        <div className="flex items-center gap-2">
          <p>Do Not Have An Account ? </p>{" "}
          <Link href="/signup" className="text-red-600">
            Register
          </Link>
        </div>
        {/* <div>
          <h2 className="font-semibold text-xl text-center">OR</h2>

          <div className="flex flex-col gap-5 mt-5">
            <button
              className="flex rounded-lg btn items-center gap-2 text-center border-blue-500 text-blue-500 bg-transparent"
              onClick={handleGoogleSignin}
            >
              Login with Google
            </button>
            <button
              className="flex rounded-lg btn items-center gap-2 text-center border-black bg-transparent"
              onClick={handleGithubSignin}
            >
              Login with GitHub
            </button>
          </div>
        </div> */}
      </Form>
    </div>
  );
};

export default SignInPage;
