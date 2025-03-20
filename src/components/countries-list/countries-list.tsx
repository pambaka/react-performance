import styles from './countries-list.module.css';
import { Country } from '@/types';
import CountryCard from '../country-card';

const CountriesList = ({ countries }: { countries: Country[] }) => {
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
