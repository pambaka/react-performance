import styles from './countries-list.module.css';
import { useEffect, useState } from 'react';
import { Country } from '@/types';
import CountryCard from '../country-card';
import fetchCountries from '@/api/fetch-countries';

const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries = async () => {
    const fetchedCountries = await fetchCountries();
    if (fetchedCountries) setCountries(fetchedCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <section className={styles['countries-list']}>
      {countries &&
        countries.map((country, index) => (
          <CountryCard
            country={country}
            key={`${index}${country.name.common}`}
          />
        ))}
    </section>
  );
};

export default CountriesList;
