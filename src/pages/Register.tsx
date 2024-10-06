import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";
import { InputField } from "../components/molecules/InputField";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: parseInt(formData.number),
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long,
        },
      },
      phone: formData.phone,
    };

    try {
      const response = await axios.post("https://fakestoreapi.com/users", data);
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <section className="bg-gray-950">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full border-gray-800 rounded-lg shadow bg-neutral-900 dark:border md:mt-0 sm:max-w-4xl xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register for an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex w-full gap-6">
                <div className="w-full space-y-4">
                  <InputField
                    type="email"
                    name="email"
                    id="email"
                    label="Email address"
                    placeholder="example@gmail.com"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="username"
                    id="username"
                    label="Username"
                    placeholder="johnd"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    placeholder="m38rmF$"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="firstname"
                    id="firstname"
                    label="First Name"
                    placeholder="John"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="lastname"
                    id="lastname"
                    label="Last Name"
                    placeholder="Doe"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="city"
                    id="city"
                    label="City"
                    placeholder="kilcoole"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full space-y-4">
                  <InputField
                    type="text"
                    name="street"
                    id="street"
                    label="Street"
                    placeholder="7835 new road"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="number"
                    name="number"
                    id="number"
                    label="Number"
                    placeholder="3"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    label="Zip Code"
                    placeholder="12926-3874"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="lat"
                    id="lat"
                    label="Latitude"
                    placeholder="-37.3159"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="long"
                    id="long"
                    label="Longitude"
                    placeholder="81.1496"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="phone"
                    id="phone"
                    label="Phone"
                    placeholder="1-570-236-7033"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button type="submit">Register</Button>
              <p className="text-sm font-light text-gray-200">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
