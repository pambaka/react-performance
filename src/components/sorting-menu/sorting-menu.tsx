import React, { ReactNode, useCallback } from 'react';
import DropdownMenu from '../dropdown-menu';

const content = ['Name asc', 'Name desc', 'Population asc', 'Population desc'];

const SortingMenu = ({
  updateSorting,
}: {
  updateSorting: (sorting: string) => void;
}): ReactNode => {
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget;

    if (!(option instanceof HTMLDivElement) || !option.textContent) return;

    const text = option.textContent;
    updateSorting(text);
  }, []);

  return (
    <DropdownMenu buttonText="Sort" content={content} onClick={handleClick} />
  );
};

export default SortingMenu;
