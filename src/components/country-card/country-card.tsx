import styles from './country-card.module.css';
import { Country } from '@/types';
import { ReactNode } from 'react';

const CountryCard = ({ country }: { country: Country }): ReactNode => {
  return (
    <div className={styles.country}>
      <h2>
        {country.name.common} <img src={country.flags.svg}></img>
      </h2>
      <section>
        <div>
          <p>region:</p>
          <p>{country.region}</p>
        </div>
        <div>
          <p>population:</p>
          <p>{country.population}</p>
        </div>
      </section>
    </div>
  );
};

export default CountryCard;
