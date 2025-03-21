import styles from './home-page.module.css';
import fetchCountries from '@/api/fetch-countries';
import CountriesList from '@/components/countries-list';
import FilteringMenu from '@/components/filtering-menu';
import SearchBar from '@/components/search-bar';
import SortingMenu from '@/components/sorting-menu';
import { REGION_ALL } from '@/consts';
import { Country } from '@/types';
import getRegions from '@/utils/get-regions';
import { ReactNode, useEffect, useState } from 'react';

const HomePage = (): ReactNode => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>(REGION_ALL);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const updateStates = async () => {
    const fetchedCountries = await fetchCountries();
    if (fetchedCountries) {
      setCountries(fetchedCountries);
      setRegions(getRegions(fetchedCountries));
    }
  };

  useEffect(() => {
    updateStates();
  }, []);

  return (
    <main className={styles.main}>
      <section>
        <SortingMenu countries={countries} updateCountries={setCountries} />
        <FilteringMenu regions={regions} updateRegion={setSelectedRegion} />
        <SearchBar updateSearchTerm={setSearchTerm} />
      </section>
      <CountriesList
        countries={countries
          .filter((country) => {
            if (selectedRegion === REGION_ALL) return true;
            return country.region === selectedRegion;
          })
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm)
          )}
      />
    </main>
  );
};

export default HomePage;
