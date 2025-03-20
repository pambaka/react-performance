export type Country = {
  name: { common: string };
  population: number;
  region: string;
  flag: string;
  flags: { svg: string };
};

export type CountryKey = keyof Country;

export enum SortingDirection {
  'asc' = 'asc',
  'desc' = 'desc',
}
