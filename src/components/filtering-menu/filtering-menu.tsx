import { ReactNode, useCallback } from 'react';
import DropdownMenu from '../dropdown-menu';

const FilteringMenu = ({
  regions,
  updateRegion,
}: {
  regions: string[];
  updateRegion: (filter: string) => void;
}): ReactNode => {
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget;

    if (option instanceof HTMLDivElement && option.textContent) {
      updateRegion(option.textContent);
    }
  }, []);

  return (
    <DropdownMenu buttonText="Filter" content={regions} onClick={handleClick} />
  );
};

export default FilteringMenu;
