import styles from './country-card.module.css';
import { Country } from '@/types';
import { memo, ReactNode } from 'react';

const CountryCard = ({
  country,
  isVisited,
  onClick,
}: {
  country: Country;
  isVisited: boolean;
  onClick: () => void;
}): ReactNode => {
  return (
    <div
      className={
        isVisited ? `${styles.country} ${styles.visited}` : styles.country
      }
      onClick={onClick}
    >
      <h2>
        {country.name.common}
        <img src={country.flags.svg}></img>
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

const MemoCountryCard = memo(CountryCard, (prevProps, nextProps) => {
  return prevProps.isVisited === nextProps.isVisited;
});

export default MemoCountryCard;
