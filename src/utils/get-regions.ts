import { Country } from '@/types';
import { REGION_ALL } from '@/consts';

const getRegions = (countries: Country[]) => {
  const regions = Array.from(
    new Set(countries.map((country) => country.region))
  );
  regions.push(REGION_ALL);

  return regions;
};

export default getRegions;
