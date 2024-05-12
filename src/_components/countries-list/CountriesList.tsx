"use client";
// import countriesData from "@/__fakeData__/data.json";
import { useEffect, useState } from "react";
import CountryCard, { CountryInterface } from "./country-card";

async function getCountriesData() {
  const data = await (
    await fetch("https://restcountries.com/v3.1/all", {
      next: {
        revalidate: 2592000,
      },
    })
  ).json();
  return data;
}

export default function CountriesList() {
  const [inputTerm, setInputTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countriesData, setCountriesData] = useState<any[]>([]);

  const filteredCountriesData = () => {
    if (countriesData.length == 0) return [];
    return countriesData.filter(
      (country) =>
        country.name.official.toLowerCase().includes(inputTerm.toLowerCase()) &&
        (selectedRegion == "" ? true : country.region == selectedRegion)
    );
  };
  useEffect(() => {
    getCountriesData().then((res) => {
      // console.log('res.data',data)
      setCountriesData(res);
    });
  }, []);
  return (
    <div className="p-2 md:p-10 flex flex-col gap-10">
      {/* SEARCH BOX AND FILTERS */}
      <div className="w-full flex items-center flex-wrap gap-4 justify-between">
        <div className="w-full md:w-1/2">
          <div className="w-full px-3 p-2 pl-8 shadow-md flex rounded-lg bg-white dark:bg-darkBlue gap-1 items-center max-w-[420px]">
            <img
              src="/icons/icon_search.png"
              className="h-4 w-4"
              alt="search icon"
            />
            <input
              value={inputTerm}
              onChange={(e) => setInputTerm(e.target.value)}
              className="p-2 w-full focus:outline-0 dark:bg-darkBlue"
              placeholder="Search for a country…"
            />
          </div>
        </div>
        <div className="w-full md:w-[300px]  ">
          <select
            id="countries"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-white shadow-lg focus:outline-0 py-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value={""}>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      {/* COUNTRIES LIST AS PER FILTERS */}
      <section className="w-full ">
        <div
          className={`w-full flex flex-wrap gap-7 ${
            filteredCountriesData().length < 4
              ? "justify-start"
              : "justify-between"
          }`}
        >
          {filteredCountriesData().map((country, index) => (
            <CountryCard
              key={index}
              flag={country.flags.svg}
              name={country.name.official}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
