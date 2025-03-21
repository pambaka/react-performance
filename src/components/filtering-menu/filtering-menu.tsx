import { Country } from '@/types';
import { ReactNode } from 'react';
import DropdownMenu from '../dropdown-menu';
import { REGION_ALL } from '@/consts';

const FilteringMenu = ({
  regions,
  countries,
  updateCountries,
}: {
  regions: string[];
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
}): ReactNode => {
  const filterCountries = (event: React.MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget;

    if (option instanceof HTMLDivElement && option.textContent) {
      if (option.textContent === REGION_ALL) {
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
