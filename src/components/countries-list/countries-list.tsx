import styles from './countries-list.module.css';
import { Country } from '@/types';
import MemoCountryCard from '../country-card';
import useLocalStorage from '@/hooks/use-local-storage';

const CountriesList = ({ countries }: { countries: Country[] }) => {
  const [visitedCountries, updateVisitedCountries] = useLocalStorage();

  return (
    <section className={styles['countries-list']}>
      {countries.map((country) => (
        <MemoCountryCard
          country={country}
          key={`${country.name.common}`}
          isVisited={visitedCountries.includes(country.name.common)}
          onClick={() => updateVisitedCountries(country.name.common)}
        />
      ))}
    </section>
  );
};

export default CountriesList;
