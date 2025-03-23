import { Country, CountryKey, SortingDirection } from '@/types';

const getSortedCountries = (sorting: string, countries: Country[]) => {
  const key = sorting.split(' ')[0].toLowerCase() as CountryKey;
  const direction = sorting.split(' ')[1] as SortingDirection;

  const sortedCounries = [...countries];

  sortedCounries.sort((a, b) => {
    switch (true) {
      case key === 'name':
        if (direction === SortingDirection.asc) {
          if (a[key].common < b[key].common) return -1;
          return 1;
        } else if (direction === SortingDirection.desc) {
          if (a[key].common > b[key].common) return -1;
          return 1;
        }
        break;
      case key === 'population':
        if (direction === 'asc') return a[key] - b[key];
        else if (direction === 'desc') return b[key] - a[key];
        break;
      default:
        break;
    }
    return 0;
  });

  return sortedCounries;
};

export default getSortedCountries;
