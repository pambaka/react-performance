import styles from './search-bar.module.css';
import { ReactNode, useCallback, useState } from 'react';

const SearchBar = ({
  updateSearchTerm,
}: {
  updateSearchTerm: (searchTerm: string) => void;
}): ReactNode => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event: React.ChangeEvent) => {
    if (event.target instanceof HTMLInputElement)
      setInputValue(event.target.value);
  };

  const handleClick = useCallback(() => {
    updateSearchTerm(inputValue.toLowerCase());
  }, [inputValue]);

  return (
    <div className={styles['search-bar']}>
      <input type="text" value={inputValue} onChange={onChange}></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
