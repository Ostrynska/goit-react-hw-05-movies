import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { SearchForm, SearchButton, SearchInput } from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        name="searchName"
        value={value}
        onChange={onChange}
        autocomplete="off"
        autoFocus
        placeholder="Movie name..."
      />
      <SearchButton type="submit">
        <IconContext.Provider value={{ size: '20px' }}>
          <BsSearch />
        </IconContext.Provider>
      </SearchButton>
    </SearchForm>
  );
};