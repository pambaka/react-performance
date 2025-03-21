import { Country, CountryKey, SortingDirection } from '@/types';
import { ReactNode } from 'react';
import DropdownMenu from '../dropdown-menu';
import getSortedCountries from './get-sorted-countries';

const content = ['Name asc', 'Name desc', 'Population asc', 'Population desc'];

const SortingMenu = ({
  countries,
  updateCountries,
}: {
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
}): ReactNode => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget;

    if (option instanceof HTMLDivElement && option.textContent) {
      const text = option.textContent;
      const key = text.split(' ')[0].toLowerCase() as CountryKey;
      const direction = text.split(' ')[1] as SortingDirection;

      updateCountries(getSortedCountries(key, direction, countries));
    }
  };

  return (
    <DropdownMenu buttonText="Sort" content={content} onClick={handleClick} />
  );
};

export default SortingMenu;
