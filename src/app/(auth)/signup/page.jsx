"use client";

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
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photoUrl } = data;
    const { data: authData, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/",
    });

    if (error) {
      toast.warning(error.message || "An error occurred during registration.");
    } else if (authData) {
      toast.success("Registration successful!");
      setTimeout(() => {
        router.push("/signin");
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
        className="flex max-w-md w-full flex-col gap-4 shadow-2xl p-10 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name */}
        <TextField isRequired type="text">
          <Label>Name</Label>
          <Input
            placeholder="Your Name"
            {...register("name")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <FieldError />
        </TextField>
        {/* Photo URL */}
        <TextField type="url">
          <Label>Photo URL</Label>
          <Input
            placeholder="Your Photo URL"
            {...register("photoUrl")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <FieldError />
        </TextField>
        {/* Email */}
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
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

        <div>
          <Button
            type="submit"
            className="w-full flex items-center justify-center py-3 bg-[#15A1BF] gap-2 text-white rounded-none"
          >
            <Check />
            Sign Up
          </Button>
        </div>
        <div className="flex w-full items-center gap-3">
          <Separator className="flex-1" />
          <div className="whitespace-nowrap">Or Sign up with</div>
          <Separator className="flex-1" />
        </div>
        <div>
          <Button
            onClick={handleGoogleSignin}
            className="w-full bg-white border border-gray-300 text-black rounded-xl"
          >
            <FcGoogle />
            Sign in with Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
