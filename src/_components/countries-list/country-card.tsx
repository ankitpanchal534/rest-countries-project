import Link from "next/link";

export interface CountryInterface {
  name: string;
  flag: string;
  region: string;
  population: string;
  capital: string;
}
export default function CountryCard(
  props: React.PropsWithChildren<CountryInterface>
) {
  const { flag, name, region, population, capital } = props;
  let countryDetailUrl = "./country-detail/" + name;
  return (
    <Link href={countryDetailUrl}>
      <div className="shadow-lg w-full max-w-full  md:max-w-[45%] lg:max-w-64 xl:max-w-64  grow   bg-white dark:bg-darkBlue rounded-lg overflow-hidden pb-10">
        <div className="w-full h-40">
          <img
            src={flag}
            alt={name + " flag image"}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="p-3 px-4 ">
          <h3 className="font-semibold text-lg text-wrap ">{name}</h3>
        </div>
        <div className="px-4 flex gap-1">
          <h3 className="font-medium">Population:</h3>
          <span className="opacity-70">{population}</span>
        </div>
        <div className="px-4 flex gap-1">
          <h3 className="font-medium">Region:</h3>
          <span className="opacity-70">{region}</span>
        </div>
        <div className="px-4 flex gap-1">
          <h3 className="font-medium">Capital:</h3>
          <span className="opacity-70">{capital}</span>
        </div>
      </div>
    </Link>
  );
}
