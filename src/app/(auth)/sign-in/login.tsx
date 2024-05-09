"use client";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconAlertTriangleFilled,
  IconBrandGithub,
  IconBrandGoogle,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/";
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

const SignIn = () => {
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success ,setSucess] = useState(""); 
  
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "/",
      },
    });
  };
  // (session ? router.push("/") : null )
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLoginWithMagicLink = async () => {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    if (!email) {
      setError("Please enter an email address.");
      return;
    } else if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    if (email.trim() === "") {
      setError("Email cannot be an empty string.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${getURL()}dashboard/`,
      },
    });

    setIsLoading(false);

    if (error) {
      console.log("Email:", email);
      setError(
        `Error: Couldn't send a magic link. Please log in again. ${error.message}`
      );
    } else {
      setSucess(`Email verification link was successfully sent to: "${email}"!`);
      setEmail("");
    }
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-slate-900 to-transparent" />
      </>
    );
  };

  return (
    <div className="dark relative flex flex-col items-center justify-center min-h-screen py-12 bg-black border-slate-600">
      <div className="max-w-md w-full mx-auto md:rounded-2xl p-4 md:p-6 shadow-input border-2 rounded-3xl bg-transparent backdrop-blur-[4px] shadow-xl z-10">
        <h2 className="font-bold lg:text-4xl text-4xl shadow-2xl bg-gradient-to-b from-slate-100 to-slate-700 text-transparent bg-clip-text">
          Welcome to Auto
        </h2>
        <p className="text-neutral-600 text-md mt-2 max-w-sm dark:text-neutral-400">
          Login/Signup to Auto below
        </p>
        <div className="my-8">
          {error ? (
            <div className="text-red-300 mb-4 rounded-xl w-full bg-red-800 h-fit p-4 flex">
              <IconAlertTriangleFilled color="red" className="mr-2" />
              {error}
            </div>
          ) : success ? (
            <div className="text-green-300 mb-4 rounded-xl w-full bg-green-800 h-fit p-4 flex">
              <IconCircleCheckFilled color="green" className="mr-2" />
              {success}
            </div>
          ) : null}
          <div className={cn("flex flex-col space-y-2 w-full", "mb-4")}>
            <label htmlFor="email" className="text-neutral-300">
              Email Address
            </label>
            <Input
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <Button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            onClick={isLoading ? undefined : handleLoginWithMagicLink}
            disabled={isLoading}
          >
            Sign up &rarr; <BottomGradient />
          </Button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4">
            <Button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              onClick={() => handleLoginWithOAuth("github")}
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {" "}
                GitHub{" "}
              </span>
              <BottomGradient />
            </Button>
            <Button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
              onClick={() => handleLoginWithOAuth("google")}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {" "}
                Google{" "}
              </span>
              <BottomGradient />
            </Button>
          </div>
        </div>
      </div>
      <BackgroundBeams className="z-1" />
    </div>
  );
};

export default SignIn;
