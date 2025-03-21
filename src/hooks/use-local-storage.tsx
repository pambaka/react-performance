import { LS_KEY } from '@/consts';
import { useReducer } from 'react';

const reducer = (countries: string[], countryName: string) => {
  const newCountries = [...countries];

  if (newCountries.includes(countryName)) {
    const index = newCountries.findIndex((name) => name === countryName);
    newCountries.splice(index, 1);
  } else newCountries.push(countryName);

  localStorage.setItem(LS_KEY, JSON.stringify(newCountries));

  return newCountries;
};

const getInitialState = (): string[] => {
  const countriesStr = localStorage.getItem(LS_KEY);

  try {
    if (countriesStr) {
      const countries: unknown = JSON.parse(countriesStr);
      if (
        Array.isArray(countries) &&
        countries.every((country) => typeof country === 'string')
      )
        return countries;
      return [];
    }
    return [];
  } catch {
    return [];
  }
};

const useLocalStorage = () => useReducer(reducer, getInitialState());

export default useLocalStorage;
