import { BASE_URL } from '@/consts';
import { Country } from '@/types';

const fetchCountries = async (): Promise<Country[] | undefined> => {
  let countries: Country[] | undefined;

  await fetch(BASE_URL)
    .then((res) => {
      if (!res.ok) return undefined;

      return res.json();
    })
    .then((data: Country[] | undefined) => {
      if (data) countries = data;
    });

  return countries;
};

export default fetchCountries;
