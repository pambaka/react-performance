import styles from './home-page.module.css';
import fetchCountries from '@/api/fetch-countries';
import CountriesList from '@/components/countries-list';
import FilteringMenu from '@/components/filtering-menu';
import SearchBar from '@/components/search-bar';
import SortingMenu from '@/components/sorting-menu';
import getSortedCountries from '@/components/sorting-menu/get-sorted-countries';
import { REGION_ALL } from '@/consts';
import { Country } from '@/types';
import getRegions from '@/utils/get-regions';
import { ReactNode, useEffect, useMemo, useState } from 'react';

const HomePage = (): ReactNode => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>(REGION_ALL);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sorting, setSorting] = useState('');

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

  const sortedCountries = useMemo(
    () => getSortedCountries(sorting, countries),
    [countries, sorting]
  );

  const filteredCountries = useMemo(() => {
    return sortedCountries.filter((country) => {
      if (selectedRegion === REGION_ALL) return true;
      return country.region === selectedRegion;
    });
  }, [selectedRegion, sortedCountries]);

  const searchedCountries = useMemo(
    () =>
      filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
      ),
    [filteredCountries, searchTerm]
  );

  return (
    <main className={styles.main}>
      <section>
        <SortingMenu updateSorting={setSorting} />
        <FilteringMenu regions={regions} updateRegion={setSelectedRegion} />
        <SearchBar updateSearchTerm={setSearchTerm} />
      </section>
      <CountriesList countries={searchedCountries} />
    </main>
  );
};

export default HomePage;
