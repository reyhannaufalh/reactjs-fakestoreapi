import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";
import { InputField } from "../components/molecules/InputField";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("changed");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.token);
        window.location.href = "/";
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-950">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full border-gray-800 rounded-lg shadow bg-neutral-900 dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <InputField
                type="username"
                name="username"
                id="username"
                label="Username"
                placeholder="john_doe"
                required
                onChange={handleChange}
              />
              <InputField
                type="password"
                name="password"
                id="password"
                label="Password"
                placeholder="Your password"
                required
                onChange={handleChange}
              />
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>
              <p className="text-sm font-light text-gray-200">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
