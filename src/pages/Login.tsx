import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";
import { InputField } from "../components/molecules/InputField";

export default function LoginPage() {
  return (
    <section className="bg-gray-950">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full border-gray-800 rounded-lg shadow bg-neutral-900 dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputField
                type="email"
                name="email"
                id="email"
                label="Email address"
                placeholder="example@gmail.com"
                required
              />
              <InputField
                type="password"
                name="password"
                id="password"
                label="Password"
                placeholder="Your password"
                required
              />

              <Button type="submit" className="w-full">
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-200">
                Don’t have an account yet?{" "}
                <Link
                  to="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
