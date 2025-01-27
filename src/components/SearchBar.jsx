import React, { useState } from "react";

function SearchBar() {
  const [selectedOptions, setSelectedOptions] = useState({
    select1: "",
    select2: "",
    select3: "",
  });

  const handleChange = (event, selectName) => {
    setSelectedOptions({
      ...selectedOptions,
      [selectName]: event.target.value,
    });
  };

  return (
    <div className="bg-red-400 w-full flex flex-col md:flex-row items-center justify-between p-4 gap-4">
      {/* Flex container for the select boxes */}
      <div className="flex flex-wrap items-center gap-6 w-full md:w-auto">
        {/* First Select Box */}
        <div className="relative w-full md:w-60">
          <select
            value={selectedOptions.select1}
            onChange={(e) => handleChange(e, "select1")}
            className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Content Writer
            </option>
            <option value="Content writer">Content Writer</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Node Js Developer">Node Js Developer</option>
            <option value="React Js Developer">React Js Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Web Developer">Web Developer</option>
          </select>
        </div>

        {/* Second Select Box */}
        <div className="relative w-full md:w-60">
          <select
            value={selectedOptions.select2}
            onChange={(e) => handleChange(e, "select2")}
            className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="Ahmadabad">Ahmadabad</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Delhi">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Indore">Indore</option>
            <option value="Noida">Noida</option>
          </select>
        </div>

        {/* Third Select Box */}
        <div className="relative w-full md:w-60">
          <select
            value={selectedOptions.select3}
            onChange={(e) => handleChange(e, "select3")}
            className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Accounting &amp;consulting">
              Accounting &amp; Consulting
            </option>
            <option value="Admin Support">Admin Support</option>
            <option value="Content Writer">Content Writer</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Data Science &amp;Analytics">
              Data Science &amp; Analytics
            </option>
            <option value="Digital &amp;Creative">Digital &amp; Creative</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Engineering &amp;Architecture">
              Engineering &amp; Architecture
            </option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
