import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import cl from './SearchBar.module.css';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  // for (const key of searchParams.keys()) {
  //   console.log(key);
  // }  
  console.log('name:', searchParams.get('name'));

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  // Зайвий код
  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // Зайвий код
    // updateQueryString(value);  
    setSearchParams({ name: value });
    setValue('');
  };

  return (
    <form className={cl.form} onSubmit={handleSubmit}>
      <input
        className={cl.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={value}
        onChange={handleChange}
      />
      <button className={cl.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;