import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "United States",
    streetAddress: "",
    city: "",
    phoneNumber: "",
    telephoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="p-6 sm:p-10 md:p-16 lg:p-20 bg-gray-50">
      <div className="flex items-center justify-center">
        <div className="border-b border-gray-900/10 bg-white shadow-md rounded-2xl p-6 sm:p-10 w-full max-w-4xl">
          <h1 className="text-lg font-semibold text-gray-900 text-center">Personal Information</h1>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First name</label>
              <input id="firstName" name="firstName" type="text" value={data.firstName} onChange={handleChange} autoComplete="given-name" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last name</label>
              <input id="lastName" name="lastName" type="text" value={data.lastName} onChange={handleChange} autoComplete="family-name" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
              <input id="email" name="email" type="email" value={data.email} onChange={handleChange} autoComplete="email" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>

            <div className="sm:col-span-3 relative">
              <label htmlFor="country" className="block text-sm font-medium text-gray-900">Country</label>
              <select id="country" name="country" value={data.country} onChange={handleChange} className="mt-2 block w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm">
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>
              <ChevronDownIcon className="absolute top-9 right-3 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            <div className="col-span-full">
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-900">Street address</label>
              <input id="streetAddress" name="streetAddress" type="text" value={data.streetAddress} onChange={handleChange} autoComplete="street-address" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-900">City</label>
              <input id="city" name="city" type="text" value={data.city} onChange={handleChange} placeholder="Herat" autoComplete="address-level2" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">Phone number</label>
              <input id="phoneNumber" name="phoneNumber" type="tel" value={data.phoneNumber} onChange={handleChange} placeholder="+93799999999" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="telephoneNumber" className="block text-sm font-medium text-gray-900">Telephone number</label>
              <input id="telephoneNumber" name="telephoneNumber" type="tel" value={data.telephoneNumber} onChange={handleChange} placeholder="+93799999999" className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button type="submit" onClick={handleSubmit} className="w-full sm:w-auto px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Save</button>
      </div>
    </form>
  );
}

export default SignUp;