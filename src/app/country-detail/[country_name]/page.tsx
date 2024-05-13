"use client";
import CountryDetails from "@/_components/country-detail/CountryDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getCountryData(country_name: string) {
  try {
    const data = await (
      await fetch(
        `https://restcountries.com/v3.1/name/${country_name}?fullText=true`,
        {
          next: {
            revalidate: 2592000,
          },
        }
      )
    ).json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
}

export default function Page() {
  const { country_name }: any = useParams();
  const [countryData, setCountryData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCountryData(country_name).then((data) => {
      setCountryData(data?.[0] ?? []);
      setLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div className="h-dvh w-full flex justify-center items-center text-xl">
        Loading...
      </div>
    );
  return <CountryDetails countryData={countryData} />;
}
