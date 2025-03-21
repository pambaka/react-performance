import styles from './countries-list.module.css';
import { Country } from '@/types';
import CountryCard from '../country-card';
import useLocalStorage from '@/hooks/use-local-storage';

const CountriesList = ({ countries }: { countries: Country[] }) => {
  const [visitedCountries, updateVisitedCountries] = useLocalStorage();

  return (
    <section className={styles['countries-list']}>
      {countries &&
        countries.map((country, index) => (
          <CountryCard
            country={country}
            key={`${index}${country.name.common}`}
            isVisited={visitedCountries.includes(country.name.common)}
            onClick={() => updateVisitedCountries(country.name.common)}
          />
        ))}
    </section>
  );
};

export default CountriesList;
