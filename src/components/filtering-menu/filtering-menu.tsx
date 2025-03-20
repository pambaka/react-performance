import { Country } from '@/types';
import { ReactNode } from 'react';
import DropdownMenu from '../dropdown-menu';
import { FILTER_ALL } from '@/consts';

const FilteringMenu = ({
  countries,
  updateCountries,
}: {
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
}): ReactNode => {
  const regions = Array.from(
    new Set(countries.map((country) => country.region))
  );
  regions.push(FILTER_ALL);

  const filterCountries = (event: React.MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget;

    if (option instanceof HTMLDivElement && option.textContent) {
      if (option.textContent === 'all') {
        updateCountries(countries);
        return;
      }

      const filteredCountries = [...countries].filter(
        (country) => country.region === option.textContent
      );
      updateCountries(filteredCountries);
    }
  };

  return (
    <DropdownMenu
      buttonText="Filter"
      content={regions}
      onClick={filterCountries}
    />
  );
};

export default FilteringMenu;
