import BackButton from "../common/BackButton";

export default function CountryDetails({ countryData }: any) {
  // const {}
  return (
    <div className="w-full p-6 md:p-10 dark:bg-verydarkBlueText ">
      <div className="mb-14 mt-7 w-full flex justify-start">
        <BackButton />
      </div>
      <div className="w-full flex flex-wrap items-start">
        <div className="w-full md:w-1/2">
          <img
            src={countryData.flags.svg}
            className="w-full max-w-[500px] h-[400]  object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="py-3">
            <h3 className="font-bold text-3xl">{countryData.name.official}</h3>
          </div>
          <div className="flex flex-wrap ">
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <div>
                <span className="font-semibold">Native Name: </span>
                <span className="font-[600] opacity-60">
                  {" "}
                  {countryData.name.common}
                </span>
              </div>
              <div>
                <span className="font-semibold">Population:</span>
                <span className="font-[600] opacity-60">
                  {" "}
                  {countryData.population}
                </span>
              </div>
              <div>
                <span className="font-semibold">Region:</span>
                <span className="font-[600] opacity-60">
                  {" "}
                  {countryData.region}
                </span>
              </div>
              <div>
                <span className="font-semibold">Sub Region:</span>{" "}
                <span className="font-[600] opacity-60">
                  {" "}
                  {countryData.subregion}
                </span>
              </div>
              <div>
                <span className="font-semibold">Capital:</span>
                <span className="font-[600] opacity-60">
                  {" "}
                  {countryData.capital}{" "}
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <div>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                <span className="font-[600] opacity-60">
                  {" "}
                  {countryData.tld[0]}{" "}
                </span>
              </div>
              <div>
                <span className="font-semibold">Currencies:</span>{" "}
                <span>
                  {
                    countryData.currencies[
                      Object.keys(countryData.currencies)[0]
                    ].name
                  }
                </span>
              </div>
              <div>
                <span className="font-semibold">Languages:</span>{" "}
                <span>
                  {countryData.languages[Object.keys(countryData.languages)[0]]}
                </span>
              </div>
            </div>
            <div className="flex justify-start gap-5 mt-5">
              <span className="font-semibold">Border Countries: </span>
              {countryData.borders.map((countryName: string) => (
                <div key={countryName} className="shadow-2xl px-5  border-2">
                  {countryName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
