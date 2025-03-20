import styles from './home-page.module.css';
import fetchCountries from '@/api/fetch-countries';
import CountriesList from '@/components/countries-list';
import FilteringMenu from '@/components/filtering-menu';
import SortingMenu from '@/components/sorting-menu';
import { Country } from '@/types';
import { ReactNode, useEffect, useState } from 'react';

const HomePage = (): ReactNode => {
  const [countries, setCountries] = useState<Country[]>([]);

  const [initialCountries, setInitialCountries] = useState<Country[]>([]);

  const getCountries = async () => {
    const fetchedCountries = await fetchCountries();
    if (fetchedCountries) {
      setCountries(fetchedCountries);
      setInitialCountries(fetchedCountries);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <main className={styles.main}>
      <section>
        <SortingMenu
          countries={countries}
          updateCountries={setCountries}
          initialCountries={initialCountries}
          updateInitialCountries={setInitialCountries}
        />
        <FilteringMenu
          countries={initialCountries}
          updateCountries={setCountries}
        />
      </section>
      <CountriesList countries={countries} />
    </main>
  );
};

export default HomePage;
